// class Person {
//   constructor (name) {
//     this.name = name
//     this.clickHandle = this.clickHandle.bind(this)
//   }
//   clickHandle() {
//     console.log('this.name',this.name)
//     return this.name
//   }

//   getName()  {
//     document.addEventListener('click',this.clickHandle)
//   }
// }

// let p = new Person('a')

// p.getName()
// const deprecatedMethods = {
//   fa() {
//     console.log('a')
//   },
//   fb() {
//     console.log('b')
//   },
//   fc() {
//     console.log('c')
//   },
// }

// const defaultMethods = {

//   ...deprecatedMethods
// }

// export default defaultMethods