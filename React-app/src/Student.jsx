import Proptypes from 'prop-types'


function Student(props){
return(
   <div className="student">
   <p> Name: {props.name} <br />
    Age: {props.age} <br />
    X-Men:{props.isStudent ? "Yes" : "No"}
    </p>
   </div>
);

}

Student.proptypes = {
    name: Proptypes.string,
    age: Proptypes.number,
    isStudent: Proptypes.bool
}
export default Student;