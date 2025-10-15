
const form = document.querySelector("form");

function FormHandle(e){
e.preventDefault();
const fullname = e.target.fullname.value;
const email = e.target.email.value;
const password = e.target.password.value;
const gender = e.target.gender.value;
const courses = e.target.course;
const selectedCourses = [];
for(let course of courses){
    if(course.checked){
        selectedCourses.push(course.value);
    }
}
const province = e.target.province.value;
const dob = e.target.dob.value;

const data = {
    fullname : fullname,
    email: email,
    password : password,
    gender: gender,
    selectedCourses: selectedCourses,
    province: province,
    dob : dob,
}
 form.reset();
console.log(data);

}
form.addEventListener("submit", (evt) =>{
    FormHandle(evt);
});

