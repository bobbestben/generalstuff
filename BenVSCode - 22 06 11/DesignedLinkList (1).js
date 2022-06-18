// class Newobject {
//     constructor(element) {
//         this.element = element
//         this.next = null
//      }
// }


class LinkedList {
    //how to create new object/node?
    //inside this class call the function
    //or need create another class?
    
    constructor(element) {
        this.length = 0
        this.head = null
    }

    createNode(element) {
        this.element = element
        this.element = {
            
        }
        this.next = null
    }

    size() { return this.length }

    head() { return this.head }

    add(element) {
        const newNode = new NewObject.createNode(element)

        if (this.head === null) {
            this.head = newNode
        }
        //need to traverse the array to add - can only add to tail
        if(this.head !== null) {
            let currentNode = head

            while (currentNode.next) { //while the next node exist, go until you reach the tail
                currentNode = currentNode.next
                
            }
            //traverse until tail, then join the tail to newNode
            currentNode.next = newNode
        } 
        this.length++
    }

    remove(element) {
        let currentNode = this.head
        let previousNode = null
        //if the element of interest is the head
        if (currentNode.element === element) {
            this.head = currentNode.next
        } else {
            //traverse from the head until reach desired element
            while (currentNode.element !== element) {
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next
        }
    this.length--
    }

    isEmpty() {
        return length===0
    }

    indexOf(element) {
        let currentNode = this.head
        let index = 0

        while(currentNode) {
            //check if element is correct
            if(currentNode.element = element) { return index }
            index++
            currentNode = currentNode.next

        }
        //no nodes match the element
        return -1
    }

    elementAt(index) {
        //checks the element at specified index
        let currentNode = this.head
        let indexCounter = 0
        //traverse starting from head until indexCounter reaches index
        while (indexCounter < index ) {
            indexCounter++
            currentNode = currentNode.next
        }
        return currentNode.element
    }

    addAt(index, element) {
        //adds element at specified index
        const newNode = new NewObject.createNode(element)
        let currentNode = this.head
        let previousNode = null
        let indexCounter = 0

        if (index > this.length) { return false }

        if (index === 0) {
            newNode.next = currentNode
            head = newNode
        } else {
            while (indexCounter < index) {
                previousNode = currentNode
                currentNode = currentNode.next
                indexCounter++
            }
            newNode.next = currentNode
            previousNode.next = newNode
        }
        length++
    }

    removeAt(index) {
        let currentNode = this.head
        let previousNode = null
        let indexCounter = 0

        if (index < 0 || index >= this.length) {
            return null
        }
        if (index === 0) {
            this.head = currentNode.next
        } else {
            while (indexCounter < index) {
                previousNode = currentNode
                currentNode = currentNode.next
                indexCounter++
            }
            previousNode.next = currentNode.next
        }
        length--
        return currentNode.element
    }

}

//Guide's answer 5 yrs ago
/* LinkedList */

// function LinkedList() { 
//     var length = 0; 
//     var head = null; 
  
//     var Node = function(element){
//       this.element = element; 
//       this.next = null; 
//     }; 
  
//     this.size = function(){
//       return length;
//     };
  
//     this.head = function(){
//       return head;
//     };
  
//     this.add = function(element){
//       var node = new Node(element);
//       if(head === null){
//           head = node;
//       } else {
//           var currentNode = head;
  
//           while(currentNode.next){
//               currentNode  = currentNode.next;
//           }
  
//           currentNode.next = node;
//       }
  
//       length++;
//     }; 
  
//     this.remove = function(element){
//       var currentNode = head;
//       var previousNode;
//       if(currentNode.element === element){
//           head = currentNode.next;
//       } else {
//           while(currentNode.element !== element) {
//               previousNode = currentNode;
//               currentNode = currentNode.next;
//           }
  
//           previousNode.next = currentNode.next;
//       }
  
//       length --;
//     };
    
//     this.isEmpty = function() {
//       return length === 0;
//     };
  
//     this.indexOf = function(element) {
//       var currentNode = head;
//       var index = -1;
  
//       while(currentNode){
//           index++;
//           if(currentNode.element === element){
//               return index;
//           }
//           currentNode = currentNode.next;
//       }
  
//       return -1;
//     };
  
//     this.elementAt = function(index) {
//       var currentNode = head;
//       var count = 0;
//       while (count < index){
//           count ++;
//           currentNode = currentNode.next
//       }
//       return currentNode.element;
//     };
    
    
//     this.addAt = function(index, element){
//       var node = new Node(element);
  
//       var currentNode = head;
//       var previousNode;
//       var currentIndex = 0;
  
//       if(index > length){
//           return false;
//       }
  
//       if(index === 0){
//           node.next = currentNode;
//           head = node;
//       } else {
//           while(currentIndex < index){
//               currentIndex++;
//               previousNode = currentNode;
//               currentNode = currentNode.next;
//           }
//           node.next = currentNode;
//           previousNode.next = node;
//       }
//       length++;
//     }
    
//     this.removeAt = function(index) {
//       var currentNode = head;
//       var previousNode;
//       var currentIndex = 0;
//       if (index < 0 || index >= length){
//           return null
//       }
//       if(index === 0){
//           head = currentNode.next;
//       } else {
//           while(currentIndex < index) {
//               currentIndex ++;
//               previousNode = currentNode;
//               currentNode = currentNode.next;
//           }
//           previousNode.next = currentNode.next
//       }
//       length--;
//       return currentNode.element;
//     }
  
//   } 

const conga = new Newobject('testelement')
console.log(conga)
// conga.add('Kitten');
// conga.add('Puppy');
// conga.add('Dog');
// conga.add('Cat');
// conga.add('Fish');

class Node
    constructor {
        this.next = next
        this.prev
    }

head = Node(0)
head.next = ??
