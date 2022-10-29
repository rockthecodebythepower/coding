import {
  fireEvent,
  getByRole,
  getByTestId,
  getByText
} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const script = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const htmlWithJs = html.replace('// script_content', `(() => {${script}})();`);

let dom;
let container;

describe('Tag Manipulation', () => {
  beforeEach(() => {
    dom = new JSDOM(htmlWithJs, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  });

  it('el título h1 ha cambiado su contenido y ahora dice "The Power Title"', () => {
    const title = getByText(container, 'The Power Title');
    expect(title).not.toBeNull();
  });

  it('el elemento con id "title-container" contiene un "p" que dice "Agregando tags al DOM!"', () => {
    const p = getByText(container, 'Agregando tags al DOM!');
    expect(p).not.toBeNull();
    expect(p.tagName).toBe('P');
  });

  it('dentro de la lista con id "list" hay cinco elementos "li" con la clase "li-element"', () => {
    const ulElement = getByTestId(container, 'list');

    expect(ulElement).not.toBeNull();
    expect(ulElement.children).toHaveLength(5);

    [...ulElement.children].forEach((element) => {
      expect(element.classList).toContain('li-element');
    });
  });

  it('cuando hago click en el botón con id "aggregator", añado un "span" dentro de "span-container" que tiene el texto "He sido creado con JS"', () => {
    const buttonElement = getByRole(container, 'button');

    expect(buttonElement).not.toBeNull();
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    const spanContainerElement = getByTestId(container, 'span-container');
    expect(spanContainerElement).not.toBeNull();
    expect(spanContainerElement.children).toHaveLength(3);

    [...spanContainerElement.children].forEach((element) => {
      expect(element.innerHTML).toBe('He sido creado con JS');
    });
  });
});
