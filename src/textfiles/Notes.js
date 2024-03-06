React ->

const arr = [10, 20, 30, 40, 50];
const [a,b,c,d,e] = arr;
const arr2 = arr;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

arr2[0] // 
arr2[1]
arr2[2]
arr2[3]
arr2[4]


Initially all the stateless components were

const [name, setName] = useState('naman');
setName(name + 'abcd'); //namanabcd

React only rerenders if there is a change in the updatedValue and the prevvalue

const isComponentInitiatedBefore = false;
function useState(initialValue){

	// in non primitive data types -> pass by reference hence we have to create a new address ->
	// object, array, date
	// deepCopy

	if(!isComponentInitiatedBefore){
		let someInternalVariable = initialValue === 'non primitive' ? deepCopy : direct value
	}

	function internalFunctionToUpdateStateAndRerender(updatedValue){
		//compare someInternalVariable with updatedValue
		if(delta){
			//someInternalValriable = updatedValue; 
			//perform rerender
		}
		// do nothing

	}

	isComponentInitiatedBefore = true;
	return [someInternalVariable, function];
}




react Internal code ->
function deepCopy()  {}
	function useState(initialValue){

		// 
		if(Array.isArray(initialValue) => deepCopy(initialValue))

		let internalVariable = initialValue;

		funtion internalFunctionToUpdateStateAndRerender(updatedValue){

			// checks for delta (difference)
			internalVariable = updatedValue;
			if(difference){
				// rerenders
				// return[internalVariable, internalFunctionToUpdateStateAndRerender]
			}

		}

		return [internalVariable(deep copied), internalFunctionToUpdateStateAndRerender ]
	}


React - version 16 ->

version 16 of react is not compatible with version 20 of node ->

18 ->

to switch node versions ->
1) Uninstall and download new
2) Use nvm -> nvm? allows us to hold multiple versions of node together. 

arr -> 8 indexes and 9 values ->

['circle', 'circle', 'cross', same random]

// the logic for rows ->
if(arr[0] === arr[1] && arr[1] === arr[2] && arr[0] != '')
if(arr[3] === arr[4] && arr[4] === arr[5] && arr[3] != '')
if(arr[6] === arr[7] && arr[7] === arr[8] && arr[6] != '')

Frameworks are rigid
Frameworks are coupled -> 

Angular -> routing -> default rounting provided by angular -> external
library -> a ton of effort ->

library -> de-coupled -> which allows us to use things which are not directly given by react to even integrate ->

react -> 2 api -> react, react-dom

state management -> use your library ->
routing -> react-router-dom (recommended) -> integrate with any 3rd party library as well.

Library are less bulky whereas frameworks are more bulky -> reason because frameworks have a lot of code built in.

Libraries have generally a easy learning curve whereas frameworks can get tricky.



React -> library -> required code in it -> you obviously need external packages -> npmjs

npm -> node package manager -> 

1) npmjs summary text ->

react is opensource true or false?
what is opensource??


react is maintained by facebook -> if you submit a PR as an external developer it will be reviewed by Facebook Team->

merged -> main branch -> Meta Team

PR -> pull requests -> 

downfall of using an opensourced library??
login signup code -> library -> which does that job for me ->

1) If any vulnerabilities then all the companies using that open source would be at risk
2) Original developer -> removed the code

React -> 

xyz -> opensourced -> library -> 2000 companies or individual started using

100 weekly downloads ->
1) It might be removed
2) Their might not be future support
3) Their might be many vulnerabilities out there so it might be better you code on your own.

Manager -> build 5 components ->

Card, Modal, 

Manager -> task -> found library -> directly
Fresher -> 90% scenarios -> 

1200 ->
1) They are very very very particular cases (edge of edge cases)
2) Company is constantly working to fix those bugs ->  Company and the opensource developers

Thats why the patch, minor and major updates ->


Components -> compots

Patch -> simple bug fix
Minor -> major bug fix, or big bug fix ->
Major -> code breaking changes -> developers need to upgrade to major version with very high caution because the moment they'd do that their previous code might start working.

Version -> 10.2.1 -> 10.3.0 -> 11.0.0

react -> 17 to 18 ->
17's code wouldn't work on 18 -> make a lot of changes ->


ABCD -> 
	Manager -> notification feature -> 

	Manager says to take a pull from branch main ->

	1) Download the repository
	2) Take the pull from the branch main ->

		default -> master ->
		git checkout main ->
		git pull -> git pull origin main -> talking the latest updates
		git checkout -b "branch_name" -> git checkout -b "feature/notification" -> code anything 
		once the feature is done -> the reviewer would merge the code with main

Revert -> rollback -> your commit would be removed

2 persons are working on a single feature -L> 

TIC TAC TOE ->
1) Building the basic tic tac toe through react
2) Integrating external libraries -> reactstrap, react-icons, react-toastify
	A) Understanding the functionality of libraries individually
	B) Integrating them
3) Optimizations 


Git vs Github?
Git is a Technology
Github is the Platform || Bitbucket (Atlassian) || Gitlab (most) -> corportates -> (Azure) -> (Cloud Platforms)


AWS ->
EC2 -> server
S3 -> Storage -> 4 ->
Lamda -> serverless architecture ->
DynamoDB -> mongo ->
API Gateway -> Load Balancer ->
ELB
ELS


TIC TAC TOE ->
1) Building the basic tic tac toe through react
2) Integrating external libraries -> reactstrap, react-icons, react-toastify
	A) Understanding the functionality of libraries individually
	B) Integrating them
3) Optimizations 

Features -> 
1) Reset -> When there is a draw or winner is declared (game is not continued) -> conditionally I would appear a button -> reset
2) We would display who the Winner is at the End
3) Toastify -> Toast ->

Bonus -> To choose the starting player -> 
Highlighting -> Distinguishing what is winning pattern ->

//Array(9).fill("empty")


Question on key -> *** -> very high chance of coming in interviews ->
1) Why we need key
2) Why we shouldn't use array indexes as keys

[
	{name: naman},
	{name: a},
	{name: abhishek},
	{name: rohit}
]


Key concepts covered ->
1) Keys and why indexes shouldn't be keys
2) Tic tac toe logic built in base react
3) Using react-icons library
4) Git vs Github
5) Working with a generic reset function in React

A very big project -> Organising the components and a little bit about rest of the possible scenarios


6 Types of buttons ->

<button> </button>

Button -> Component -> Props ->
On the basis of those props you would inculcate some kind of conditional rendering

Input -> (type === prop)
	type = "text"
	type = "number"
	type = "dropdown"

Instructor 2 -> 4-5 common components
4-5 advance components -> Modal

React has certain advantages -> optimization, writing lesser code, reactivity, quick.
	virtual dom and real dom ->
	Keys -> I2 ->
Batching ->
	setState 
	setState
	setState
	setState
	setState



Functional Component vs Class Components ->
Stateless Components vs Statefull Components ->


Controlled vs Uncontrolled Component ->

	Uncontrolled -> If something changes in the UI without the interference of React then the component is called as an Uncontrolled Component.

	Controlled -> If React is in full control of the data in the UI then that is referred to as a Controlled Component.


let arr =[];
arr['twenty'] = 20;
console.log(arr); //

1) ERROR
2) NOT error

	output?

In JS -> Array is basically a dikhawa -> hoax ->
Array is object only ->
Abstraction layer built over objects to make array ->

{}, [] ->

const [arr, setArr] = useState([1,2,3,4,5]);

const [obj, setObj] = useState({name: 'naman', age: 10})

Question ->
Update the states such that 3 in the array becomes 'abcd' as the value age in the object becomes : 100

let key = 'random';
let value = 'val';
let obj = {};

obj.key = value;
console.log(obj); //{random: val} wrong // key:val

Summary:
	Forms ->
		Controlled and Uncontrolled Components
		Created Controlled
		Created Uncontrolled 
		Handled Scalability of controlled forms (States and functions)

Tomorrows: 
	1) Error Handling in forms
	

1) Rewatch lecture -
2) Code the same thing that we did on your own ->
	put 4 different fields ->
3) After studying those who have doubt connect with me before the lecture

**Extra efforts -> study the library formik ->

There are 2 more ways to handle the form ->
1) ref -> (we would be studying soon in the normal lectures)
2) new formData -> (this is an extra part -> to be covered in I2)


Today's Lecture -> 22/02/24
	1) Lifting the state
	2) SideEffects 
	3)-> useEffect


The component where the states resides (lives or initiated) only at that place the state should be ideally changed.

React Lifecycle (Simple) -> complex will be done later
1) Initialisation
2) Mounting
3) Update (updation)
4) Unmounting

What can be the possible condition in which this card gets removed (unmounted)

React Hooks (Functional components of react)

1) HOOK -> useEffect hook -> 

mounted function ->
updated function ->
unmounted function ->


beforeMount(){
	console.log('I want to handle something before mounting')
}
beforeUpdate(){}
onUnmount()


Summary ->
	Lifting the state -> where we convered how react unidirectional property forces to lift the state

	hacky way of passing the data from a child component to parent component
	-> define a function the parent level, pass it as a prop to the child level and then pass the data from the child level by calling the function and we got the data from child in parent.

	side effects

	useEffect and a mini syntax of it


Tomorrow ->
why we need these lifecycle methods
when do we use them
how to handle the update
what is the dependency array


revise -> 
Doubts ???
useEffect ->
few mini questions on that
assignment ->
inclass and post class ->

make a polyfill of maps ->

1) The actual function you have study its own functionality
2) Try to replicate those functionality as if the function is not present with you

const arr = [1,2,3,4,5,6];
const newArr = arr.map((value, index, completeArr)=>{
	return value+index;
}) 

Array.prototype.myMap = function(cb){
	const newArr =[];
	for(let i=0; this.length; i++){
		const returnedValue = cb(this[i], i, this);
		newArr.push(returnedValue);
		//newArr.push(cb(this[i], i, this));
	}
	return newArr;
}

3 situations of dependency array
1) dependency array not present at all
	A) We should never have something like this
	B) A situation like this triggers your useEffect on both mounted and updated
	C) It can go pretty uncontrollable hence we avoid using it

2) dependency array present but blank
	A) This is what we use specifically for mounted state

3) dependency array with certain stakes in them
	A) This also gets triggered on mounted
	B) This gets triggered on updated only if the states which are passed as a dependency array changes

Question ->
	Make a hierarchy
		Parent
			Child1
			Child2

1) When child1 mounts child2 should unmount (Prove with valid console.log)
2) On each update on the parent -> log I am updated


TODO list ->
Concepts ->
	1) State uplifting
	2) Props
	3) Hacky way of sending data upwards to your parent
	4) Forms
	5) React-icons
	6) Conditional rendering of classes


App.js (parent)
	<h1>
	<TodoForm />
		(Form Tag or you can directly use an input and button)

	<TodoDisplay />
		<TodoItem />
			(todo content, tick icon, delete icon)

** special -> save and retrieve todos -> on refresh -> the same items should appear
	Hint -> use local storage along with useEffect
