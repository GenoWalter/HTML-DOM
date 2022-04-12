// Optional chaining hay Safe navigation là một operator trong lập trình hướng đổi tượng thường access một object và trả về các giá trị 
// pointer được nested hoặc undefined/null nếu không tồn tại.

// obj.val?.prop
// obj.val?.[expr]
// obj.arr?.[index]
// obj.func?.(args)

const obj = {
    name: 'Alice',
    cat: {
      name: 'Dinah',
      cat2: {
        name: 'Dinah 2',
        cat3: {
             name: 'Dinah 3'
        }
      }
    }
};


if (obj?.cat?.cat2?.cat3) {
     console. log (obj.cat.cat2.cat3.name);
}



const obj = {
    // getName(value) {
     // console. log(value);
     // }
 }
 obj.getName?.(123);