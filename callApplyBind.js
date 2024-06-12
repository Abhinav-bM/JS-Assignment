const user = {
  firstName: "Abhinav",
  secondName: "B Manoj",
  age: 22,
};

function fullName (district,d){
    console.log(this.firstName + " " + this.secondName +" " + district + " " + d)
}

fullName.call(user, "kozhikode", "fafsfas")

fullName.apply(user, ['askfd', 'lklskjfjlf'])

const callLater = fullName.bind(user, 'aaaaa', 'bbbbb')

callLater()