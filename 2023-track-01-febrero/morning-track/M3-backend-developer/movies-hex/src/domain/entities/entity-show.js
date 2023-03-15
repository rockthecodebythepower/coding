//Desde fuera le pasaremos el "modelo" de base de datos.
//En este caso sabemos que va a ser mongoose, pero preparamos el terreno para que sea el otro fichero quien le indique a donde se va a conectar

module.exports = (db) => {
  const showSchema = new db.Schema(
    {
      title: { type: String, required: true },
      poster: { type: String, required: true },
    },
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    }
  );
  return db.model('Show', showSchema);
};
