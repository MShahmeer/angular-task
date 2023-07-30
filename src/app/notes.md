# Passing Data from Parent to Child using Inputs property

    1: Create the child component
    2: create a field to get data in parent that you want to pass to child, pass data using the template variable and call an event to refresh the browser in our case we used keyup
    3: add that child component in the parent component using selector, and pass the data using that template variable
    4: show that data using the {{}} in the child component but make sure to get that template variable in child component meta data inputs array like inputs:["parentData"]

# Passing Data from Child to Parent using Outputs property

    In parent to child we had child selector in parent, but now child doesnot contain parent selector. So we will make a custom method in child.ts and will call that as event while getting the data as input <input type="text" #childComponent (keyup)="onChange(childComponent.value)" /> now here template variable has the value that we are passing to the custom method. Now that custom method will call the EventEmitter interface to fire event

    onChange(val: any){
        this.childEvent.emit(val)
    }

    Now after these two processes we will go to parent component html file and will get parent data as an event using parenthese () this will get the value in another method on which we will call the $event

    <app-child (childEvent)="getData($event)"></app-child>

    **Steps**
    1: take the input field in child, use template variable to pass the value in custom function
    2: custom function will use event emitter to emit the event
    3: add the outputs array in child
    3: get that same outputs array name as an event in parent component and then call another method to get the $event in that
    4: make that method in parent.ts and a field to show  child data in parent.html
