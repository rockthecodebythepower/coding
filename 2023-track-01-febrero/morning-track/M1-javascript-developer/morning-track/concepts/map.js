const users = [
  { name: 'Alberto', age: 35 },
  { name: 'Antonio', age: 32 },
  { name: 'Cristian', age: 30 },
]

let rtcUsers = [];

users.forEach((user) => {
  rtcUsers.push(
    {
      name: `RTC ${user.name}`,
      age: user.age
    }
  )
})

console.log(rtcUsers)

const rtcUsersMap = users.map((user) => {
  return {
    name: `RTC ${user.name}`,
  }
})

console.log(rtcUsersMap)