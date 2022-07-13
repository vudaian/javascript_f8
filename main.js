//Bài 1: Khai báo biến và comments
/**
 * var fullName = 'Vu Dai An';
 * var age = 20;
 * alert(fullName);
 * alert(age);
 */

//Bài 2: Build-in
/**
 * - alert
 * - console
 * - confirm
 * - prompt
 * - set timeout
 * - set interval
    var fullName = 'Vu Dai An';
    console.log(fullName);
    confirm(fullName);
    prompt(fullName);
    setTimeout(function() { //Thực thi đoan code sau 1 khoảng thời gian
        console*.log(fullName);
    }, 1000);
    setInterval(function(){ //Thực thi đoạn code sau 1 khoảng thời* gian nhiều lần
        console.*log(fullName + Math.random);
    }, 1000);
*/
//Bài 3: Toán tử
/**
 * - Toán tử số học -arithmetic
 * - Toán tử gán -assignment
 *  Toán tử     Ví dụ       Tương đương
*     =         x = y           x = y 
*     +=        x += y          x = x + y
*     -=        x -= y          x = x - y
*     *=        x *= y          x = x * y
*     /=        x /= y          x = x / y
*     **=       x **= y         x = x ** y  
 * - Toán tử so sánh - comparison
 *  Toán tử
 *    ==
 *    !=
 *    >
 *    <
 *    >=
 *    <=
 *    ===
 * - Toán tử logic - logical
 */ 

//Bài 4: Toán tử ++ --
/** 
 * - Hậu tố: Postfix 
 *  var number = 1;
 *  console.log(number++); // 1
 *  console.log(number); // 2
 *  console.log(number++); // 2
 *  console.log(number); // 3
 * - Tiền tố: Prefix
 *  var number = 1;
 *  console.log(++number); // 2
 */

//Bài 5: Toán tử chuỗi
/**
 * var firstName = 'Vu';
 * firstName += ' Dai'; 
 * var lastName = 'An';
 * console.log(firstName + ' ' + lastName); // Toán tử + trở thành toán tử nối chuỗi
 */

//Bài 6: Câu điều kiện if
/**
 * if(điều kiện) {
 * 
 * } else {
 * 
 * }
 * 
 * 0 false '' "" NaN null // điều là điều kiện false
 */

//Bài 7: Các kiểu dữ liệu
/**
 * - Dữ liệu nguyên thủy - Primitive data
 *      number - số
 *      string - chuỗi
 *      boolean - đúng sai
 *      null - không có giá trị
 *      undefined - không có giá trị được gán
 *      symbol - unipue 
 * - Dữ liệu phức tạp - Complex data
 *      function
 *    => var myFunction = function () {
 *      *    alert('Hello world');
 *      }*
 *      object
 *    =>* var myObject = {  
 *       *   name: 'An';
 *          age: 18;
 *          myFunction: function () {
 *          
 *          }*
 *      }
 * - Kiểm tra kiểu dữ liệu 
 *      conso*le.log(typeof + biến);
 */

//Bài 8: Toán tử logic và câu lệnh điều kiện if
/**
 * var a = 1;
 * var b = 2;
 * var result = a < b && a > 0;//Toán tử && lấy từ trái qua phải chỉ lấy 6 giá trị phủ định
 * var result1 = 'A' || 'B';//Toán tử || lấy giá trị khẳng định từ trái qua phải
 * 
 * if(result) {
 *     console.log("Dieu kien dung");
 * } else {
 *     console.log("Dieu kien sai");
 * }
 * 
 */

//Bài 9: Hàm - function
/**
 * //Quy tắc đặ*t tên Hàm: a-z A-Z 0-9 _ $
 * function showDialog() {
 *     alert('Hello world');
 * }
 * 
 * //Cách gọi hàm sử dụng toán tử gọi ()
 * showDialog();
 * 
 * //Những điề cần biết về function
 * - Khi đặt tên nhiều function cùng nhau thì function cuối cùng ghi đè lên các function đầu tiên
 * - Có thể khai báo biến trong hàm nhưng biến đó chỉ được dùng trong hàm vì nó có tính chất private
 * - Có thể định nghĩa 1 hàm trong 1 hàm khác, nhưng phạm vi sử dụng dùng trong hàm
 * 
 * //Các loại function
 * - Declaration function // có thể gọi trước khi được định nghĩa
 *      function showMessage() {
 *      
 *      }
 * - Expression function
 *      var showMessage = function nameFunction() {
 *  
 *      }
 *      setTimeout(function nameFunction() {
 * 
 *      });
 *      var myObject = {
 *          myFunction: function nameFunction() {
 *            
 *          }
 *      }
 * - Arrow function
 */

//Bài 10: Tham số trong Hàm
/**
 * function writeLog(messeage, messeage2) {
 *     console.log(messeage, messeage2);
 * *}
 * writeLog('Hello world', 'Xin chao');
 * 
 ** function writeLog() {
 *     var myString = '';
 * *    for(var param of arguments) {
 *         myString += `${param} - `;
 *     }
 * *    console.log(myString);
 * }
 * writeLog('a', 'b', 'c');
 */

//Bài 11: Từ khóa retune trong hàm
/**
 * function sum(a, b) {
 *     return a + b;
 * }
 * var result = sum(2, 8);
 * console.log(result);
 */

//Bài 12: Kiểu dữ liệu chuỗi
/**
 * // Các cách để tạo chuỗi:
 *      var fullName = '';
 *      var fullName = new String(''); //Kiểu dữ liệu object
 * 
 * // Dấu backslash (\)
 *  var fullName = 'Hello, my nam is \'An\'';
 * 
 * //Độ dài chuỗi
 *  console.log(fullName.length);
 * 
 * //Template string ES6
 * console.log(`${fullName}`);
 * 
 * //Làm việc với chuỗi
 * - length
 * - find index // tìm vị trí của ký tự trong 1 chuỗi 
 *      console.log(fullName.indexOf('An', 2));
 *      console.log(fullName.lastIndexOf('An'));
 *      console.log(fullName.search('An'));
 * - cut string
 *      console.log(fullName.slice(2, 3)); //Cắt từ trái qua phải
 *      console.log(fullName.slice(-3, -1)); //Cắt từ phải qua trái
 * - replace //Chuyển đổi chuỗi
 *      console.log(fullName.replace())
 * - convert to upper case
 *      console.log(fullName.toUpperCase(''));
 * - convert to lower case 
 *      console.log(fullName.toLowerCase(''));
 * - trim //Loại bỏ khoảng trắng đầu cuối ký tự
 *      console.log(fullName.trim());
 */

//Bài 13: Kiểu dữ liệu number
/**
 * - Cách tạo giá trị number
 *      var age = 18;
 *      var PI = 3.14;
 *      var otherNumber = new Number(9); //Kiểu dữ liệu là object
 * - Làm việc với number
 *      console.log(age.toString); //Chuyển đổi từ số sang chuỗi
 *      console.log(PI.toFixed(2)); //Làm tròn
 * 
// Number.isFinite(2 / 0); // false
// Number.isFinite(20 / 5); // true
// Number.isFinite(0 / 0); // false

// Number.isInteger(999999999); // true
// Number.isInteger(0.2);       // false
// Number.isInteger(Math.PI);   // false

// Number.parseFloat('10') // 10
// Number.parseFloat('10.00') // 10
// Number.parseFloat('238,21') // 238
// Number.parseFloat('237.22') // 237.22
// Number.parseFloat('34 56 78') // 34
// Number.parseFloat(' 37 ') // 37
// Number.parseFloat('18 is my age') // 18

// Number.parseInt('10') // 10
// Number.parseInt('10.00') // 10
// Number.parseInt('238,21') // 238
// Number.parseInt('237.22') // 237
// Number.parseInt('34 56 78') // 34
// Number.parseInt(' 37 ') // 37
// Number.parseInt('18 is my age') // 18

// var numberObject = 1234.56789;

// numberObject.toFixed(); // '1235'
// numberObject.toFixed(1); // '1234.6'
// numberObject.toFixed(6); // '1234.567890'

// (11).toString();    // '11'
// (18).toString();     // '18'
// (17.3).toString();   // '17.3'
 */

//Bài 14: Mảng "Array"
/**
 // var languages = ['javascript', 'PHP', 'C#', null, undefined, function() {}, Object, {}];
 // var languages2 = new Array(
 //     'javascript', 
 //     'PHP', 
 //     'C#', 
 //     null, 
 //     undefined, 
 //     function() {}, 
 //     Object
 // )//Kiểu object
 // console.log(languages);
 
 // console.log(Array.isArray(languages)); //Kiểm tra có phải array hay không
 
 // console.log(languages.length); //Kiểm tra độ dài của mảng
 
 // console.log(languages[2]); //Lấy ra phần tử thứ
 */

//Bài 15: Làm việc với Array
/**
        // var languages = ['Javascript', 'php', 'C#'];
        // var languages1 = ['Java', 'C++'];
 * - to string
 // console.log(languages.toString()); //Biến array thành chuỗi
 * - join
 // console.log(languages.join('/')); //Biến array thành chuỗi được ngăn cách bằng 1 dấu, nếu chạy trên mảng rỗng trả về là undefined
 * - pop
 // console.log(languages.pop()); //Xóa phần tử cuối và trả về phân tử đã xóa, nếu chạy trên mảng rỗng trả về là undefined
 * - push
 // console.log(languages.push('C++', 'Java')); //Thêm 1 hoặc nhiều phần tử vào cuối mảng
 * - shift
 // console.log(languages.shift()); //Xóa phần tử đầu và trả về phân tử đã xóa, nếu chạy trên mảng rỗng trả về là undefined
 * - unshift
 // console.log(languages.unshift('Ruby', 'Python')); // Thêm 1 hoặc nhiều vào đầu mảng
 * - splice
//  languages.splice(1, 2, 'Ruby')
//  console.log(languages)
 * - concat
//  console.log(languages1.concat(languages)); //Hợp hai mảng vào nhau
 * - slicing
//  console.log(languages.slice(1, 2));//Cắt mảng
 */

//Bài 16: Object
/**
 // var emailKey = 'email';
 
 // var myInfo = {
 //     name: 'An',
 //     age: 18,
 //     'address': 'Thai Binh',
 //     [emailKey]: 'vudaian12a7@gmail.com',
 //     getName: function() {
 //         return this.name;
 //     }
 // };
 // console.log(myInfo.getName());
 // //Cách thêm value
 // myInfo.email = 'vudaian12a7@gmail.com';
 // myInfo['my-email'] = 'vudaian12a7@gmail.com';
 // console.log(myInfo);
 // //Cách lấy value
 // console.log(myInfo.name);
 // console.log(myInfo['address']);
 // //Xóa key trong object
 // delete myInfo.address;
 // console.log(myInfo);
 */

//Bài 17: Object constructor
/**
    function Animal(name, leg, speed) {
        this.name = name,
        this.leg = leg,
        this.speed = speed
    }
    var parrot = new Animal('gà', 2, 10)
 */

//Bài 18: Object prototype
/**
 * 
 */

//Bài 19:


//Bài 20: