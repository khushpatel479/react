
let y;
function main()
{
    let v = prompt("Enter the choice : ");
    if(v == "add")
    {
        let a = prompt("Enter the first number : ");
        let b = prompt("Enter the first number : ");
        let c = a+b;
        y=c;
    }

    if(v == "sub")
    {
        let a = alert("Enter the first number : ");
        let b = alert("Enter the first number : ");
        let c = a-b;
        y=c;
    }
   alert(y);
   return y;
}
export {main};
