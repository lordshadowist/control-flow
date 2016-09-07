// Original
var tokens = 3; // Jimmy's tokens

// Can he ride?
if ( tokens >= 5 ) {
    console.log("Step right up!");
} else {
    console.log("Sorry, you can't ride")
}

// Must be > 4ft tall
var tokens = 3; // Jimmy's tokens
var height; // in ft

// Can he ride?
if ( tokens < 5) 
{
    console.log("Not enough tokens");
} 
else if (height < 12) 
{
	console.log("Not tall enough to ride");
}
else 
{
    console.log("Step right up!");
}

// Must be 12 yrs old
var tokens = 3; // Jimmy's tokens
var height; // in ft
var age; // in yrs


// Can he ride?
if ( tokens < 5) 
{
    console.log("Not enough tokens");
} 
else if (height < 4) 
{
	console.log("Not tall enough to ride");
}
else if(age < 12)
{
	console.log("Not old enough to ride");
}
else 
{
    console.log("Step right up!");
}

// Under 12 can be accompanied by Adult
var tokens = 3; // Jimmy's tokens
var height; // in ft
var age; // in yrs
var adult; // with adult or not

// Can he ride?
if ( tokens < 5) 
{
    console.log("Not enough tokens");
} 
else if (height < 4) 
{
	console.log("Not tall enough to ride");
}
else if(age < 12 && adult == false)
{
	console.log("Not old enough to ride");
}
else 
{
    console.log("Step right up!");
}

// Boss Isn't looking
var tokens = 3; // Jimmy's tokens
var height; // in ft
var age; // in yrs
var adult; // with adult or not
var boss; // boss looking or not

// Can he ride?
if (!boss)
{
	console.log("Step right up!");
}
else if ( tokens < 5) 
{
    console.log("Not enough tokens");
} 
else if (height < 4) 
{
	console.log("Not tall enough to ride");
}
else if(age < 12 && adult == false)
{
	console.log("Not old enough to ride");
}
else 
{
    console.log("Step right up!");
}

//Free Ride with Pass
var tokens = 3; // Jimmy's tokens
var height; // in ft
var age; // in yrs
var adult; // with adult or not
var boss; // boss looking or not
var pass; // pass or no pass that gives free ride

// Can he ride?
if (!boss)
{
	console.log("Step right up!");
}
else if ( tokens < 5 && !pass) 
{
    console.log("Not enough tokens");
} 
else if (height < 4) 
{
	console.log("Not tall enough to ride");
}
else if(age < 12 && adult == false)
{
	console.log("Not old enough to ride");
}
else if(pass)
{
	console.log("Step right up");
}
else 
{
    console.log("Step right up!");
}

switch(joke.isFunny)
{
	case "yes":
		laugh();
		break;
	case "sort of"
		chortle();
		break;
	default:
		stareBlankly();
}