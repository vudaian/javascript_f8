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
 * //Những điều cần biết về function
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
    // Làm bài tại đây
    // function Student(firstName, lastName) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.getFullName = function() {
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    // }
    // Student.prototype.getFullName = function() {
    //         return `${this.firstName} ${this.lastName}`;
    // };
    // // Ví dụ khi sử dụng
    // var student = new Student('Long', 'Bui');
    // console.log(student.firstName);  // 'Long'
    // console.log(student.lastName);  // 'Bui'
    // console.log(student.getFullName());  // 'Long Bui'
 */

//Bài 19: Đối tượng date
/**
    // var date = new Date();
    // var date2 = Date();
    // console.log(date);
    // console.log(typeof date);
    // console.log(date2);
    // console.log(typeof date2);
    
    // var year = date.getFullYear();
    // var month = date.getMonth() + 1;
    // var day = date.getDay();
    // console.log(`${day}/${month}/${year}`);
 */

//Bài 20: Math object
/**
 * - Math.PI
 * - Math.round()//Làm tròn
 * - Math.abs()//Trị tuyệt đối
 * - Math.cell()//Làm tròn trên
 * - Math.floor()//Làm tròn dưới
 * - Math.random()//Trả về số thập phân ngẫu nhiên
 *         function getRandomItem(myArray) {
 *             return myArray[Math.floor(Math.random() * myArray.length)]
 *         }
 *         console.log(getRandomItem);
 * - Math.min()//Trả về số nhỏ nhất
 * - Math.max()//Trả về số lớn nhất
 */

//Bài 21: if else
/**
     var days = prompt(`Nhập Thứ trong tuần`);
    if (days == 'Thứ 2') {
        alert('Hôm nay là thứ 2');
    } else if (days == 'Thứ 3') {
        alert('Hôm nay là thứ 3');
    } else if (days == 'Thứ 4') {
        alert('Hôm nay là thứ 4');
    } else if (days == 'Thứ 5') {
        alert('Hôm nay là thứ 5');
    } else if (days == 'Thứ 6') {
        alert('Hôm nay là thứ 6');
    } else if (days == 'Thứ 7') {
        alert('Hôm nay là thứ 7');
    } else if (days == 'Thứ 8') {
        console.log('Hôm nay là chủ Nhật');
    } else {
        alert('Nhập sai');
    }
 */

//Bài 22: Switch
/**
    var date = 2;
    switch(date) {
        case 2:
        case 3:
        case 4:
            console.log('Hôm nay là thứ 2,3,4');
            break;
        case 5:
            console.log('Hôm nay là thứ 5');
            break;
        default:
            console.log('Không biết');
    }
 */

//Bài 23: Tổng hợp
/**
# 1. if, else if, else
  >> cú pháp
  if(<dieu_kien>){
        --code--
  }else if(<dieu_kien>){
        --code--
  }else{
        --code--
  }

  >> if, else if
  - nếu một nhánh thỏa mãn điều kiện thì sẽ bỏ qua các nhánh còn lại                                                                      

  >> else
  - nếu tất cả các nhánh đều không thỏa mãn thì sẽ vào else

# 2. switch
  >> cú pháp
  switch(<bieu_thuc>){
        case <dieu_kien_bang>:
            --code--
            break
        case <dieu_kien_bang>:
            --code--
            break
        default:
            --code--
        
  }

  - khi điều kiện đúng sẽ thực hiện các dòng code bên trong và khi gặp từ khóa break thì sẽ thoát khỏi biểu thức switch
    nếu không gặp từ khóa break thì sẽ thực hiện các câu lệnh phía sau mà không cần xét điều kiện

  - nếu tất cả các case đều không lọt vào thì sẽ lọt vào default

# 3. Khi nào sử dụng switch khi nào sử dụng if else
  >> khi sử dụng if else
  - khi dùng toán tử >, >=, <, <=, !=
  - khi dùng toán tử == mà có <= 3 trường hợp

  >> khi sử dụng switch
  - khi sử dụng toán tử == mà có > 3 trường hợp

# 4. Toán tử 3 ngôi
  >> cú pháp
  <dieu_kien> ? --code-- : --code
  VD: var result = course.coin > 0 ? `${course.coin} coin` : 'Miễn phí'

  - nếu điều kiện đúng thì sẽ thực hiện đoạn code sau dấu ?
  - nếu điều kiện sai thì sẽ thực hiện đoạn code sau dấu :
 */

 //Bài 24: Vòng lặp for
 /**
    function getRandNumbers(min, max, length) {
        var a = [];
        for(var i = 0; i < length; i++) {
            a[i] = Math.random() * (max - min) + min;
        }
        return a;
    }
    console.log(getRandNumbers(1, 100, 99));

// Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
// luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
// nếu vòng lặp không có điểm dừng.
 * 
// VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
// VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
// là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 *
// => Treo trình duyệt!!! 

    var myArray = [
        'Java',
        'PHP',
        'Dart',
        'Ruby',
        'Python'
    ];
    var arrayLength = myArray.length;
    for (var i = 1; i < arrayLength; i++) {
        console.log(myArray[i]);
    }

//for in
    function run(object) {
        var arr = [];
        for (var key in object) {
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
        };
        return arr;
    }
    // Expected results:
    console.log(run({ name: 'Nguyen Van A', age: 16 }));
    // Output:
    // [
    //     "Thuộc tính name có giá trị Nguyen Van A",
    //     "Thuộc tính age có giá trị 16"
    // ]

//for of
    var orders = [
        {
            name: 'Khóa học HTML - CSS Pro',
            price: 3000000
        },
        {
            name: 'Khóa học Javascript Pro',
            price: 2500000
        },
        {
            name: 'Khóa học React Pro',
            price: 3200000
        }
    ];
    function getTotal(sumPrice) {
        let sum = 0;
        // for(var key in orders) {
        //     sum += sumPrice[key].price;
        // }

        for (var value of Object.keys(orders)) {
            sum += sumPrice[value].price;
        }
        return sum;
    }
    console.log(getTotal(orders))

  */

//Bài 25: vòng lặp while, do while
/**
 * //while
    var myArray = [
        'JavaScript',
        'PHP',
        'Java'
    ]
    var i = 0;
    while (i <= myArray.length) {
        console.log(myArray[i]);
        i++;
    }
 
 * //do while
    var i = 0;
    var isSuccess = false;
    do {
        i++;
        console.log('Nạp thẻ lần' + i);
        if (false) {
            isSuccess = true;
        }
    } while (!isSuccess && i < 3);
 */
 
//Bài 26: Đệ quy
/**
 * 
 */

//Bài 27: Làm việc với mảng
/**
    courses=[
        {
            id :0,
            name: "html",
            coin:200
        },
        {
            id :1,
            name: "php",
            coin:0
        },
        {
            id :2,
            name: "java",
            coin:300
        },
        {
            id :1,
            name: "html",
            coin:200
        },
        {
            id :1,
            name: "css",
            coin:300
        },
    ]
        courses.forEach(function (course,index) {
            console.log(index,course);
        });
        var check=courses.every(function (course,indel) {
            return course.coin===0;
        });
        console.log("every()"+" check all coin=0 : " +check);

        var check=courses.every(function (course,indel) {
            return course.coin===200
            
        });
        console.log("some()"+" check coin=200 : "+check);

        var check=courses.find(function (course,indel) {
            return course.name==="html"
        });
        console.log("find()"+" check name html : ");
        console.log(check);

        var check=courses.filter(function (course,indel) {
            return course.name==="html";
        });
        console.log("filter()"+" check name html : ");
        console.log(check);

//Tính tổng số like trong mảng sports dùng reduce()
        const sports = [
            {
                id: 1,
                name: 'Bóng rổ',
                like: 6
            },
            {
                id: 2,
                name: 'Bơi lội',
                like: 5
            },
            {
                id: 3,
                name: 'Bóng đá',
                like: 10
            },
        ];
        var html = sports.reduce(function(a, b) {
            var total = a +b.like;
            return total;
        }, 0);
        console.log(html)

        function getTotalGold(sport){
            var totalGold = sport.reduce(function(total, sport) {
                return total + sport.gold;
            }, 0)
            return totalGold
        }
        
//them ten mon the thao truoc bong ro, boi loi
// thêm trường likeText 
        var myHandle = function(sport, index) {
            return {
                id: sport.id,
                name: `Môn thể thao: ${sport.name}`,
                like: `Số lượt thích: ${sport.like}`,
                likeText: `Bằng chữ: ${sport.like}`
            }
        }
        var html = sports.map(myHandle);
        console.log(html);

//CÁC HÀM GIÚP LÀM VIỆC VỚI MẢNG NGẮN NGỌN HƠN
NOTE: Các hàm dưới đây đều có thể thực hiện bằng vòng lặp. và tham số truyền vào phải là một function, nếu không truyền vào 1 function sẽ gây ra lỗi.

- every: dùng để kiểm tra tất cả các phần tử trong mảng cần cùng thõa mãn một điều kiện nào đó, kiểu dữ liệu trả về là boolean.

- some: ngược lại với every, chỉ cần tìm thấy điều kiện thỏa mãn thì sẽ trả về true. Kiểu dữ liệu trả về vẫn là boolean.
 -> Hiểu đơn giản là every là toán tử &&, còn some là toán tử ||

- find : dùng để tìm kiếm giá trị của key cần tìm, nhưng sẽ chỉ tìm thấy được và trả về một phần tử tìm thấy.

- filter: giống với find cũng là tìm kiếm nhưng sẽ tìm kiếm nhiều hơn là 1 phần tử, sẽ trả về hết tất cả các phần tử tìm kiếm được.

- map: dùng để thêm hoặc sửa lại các phần tử trong object của một mảng theo cách mong muốn.

- reduce: dùng để lưu trữ biến tích trữ, thay vì dùng vòng lặp để tính giá trị cộng dồn từ các phần tử trong mảng thì reduce sẽ giúp chúng ta việc đó.
 */

//Bài 28: includes method
/**
 *  var Arr = [1, 2, 3, 4, 45, 6, 78, 8, 7, 6, 5, 4, 54];
        //IndexOf 
        console.log(Arr.indexOf(4));
        //Includes 
        console.log(Arr.includes(4))

//includes thuần Javascript
    Array.prototype.includes2 = function(searchElement, fromIndex) {
        const arrayLength = this.length;
    var startPosition = 0;
    if(fromIndex) {
        if(fromIndex >= 0) {
        startPosition = fromIndex;
        } else {
        startPosition = arrayLength + fromIndex;
        if (startPosition < 0) {
            startPosition = 0;
        }
        }
    }
    
    for(var i = startPosition; i < arrayLength; i++) {
        if(this[i] === searchElement) {
            return true;
        }
        }
        return false;
    }

    const numbersToSearch = [1, 2, 3, 4, 5];
    console.log(numbersToSearch.includes2(3));
    console.log(numbersToSearch.includes2(3, 3));
    console.log(numbersToSearch.includes2(3, -6));
    console.log(numbersToSearch.includes2(3, 6));
 */


//Bài 29: Callback
/**
     function myFunction(param) {
         console.log(param);
    }
    
    function myCallback() {
    
    }
    myFunction(myCallback);

    //ARRAY EXAMPLE 1 
    var course = [
        'Javascript',
        'PHP',
        'HTML',
        'REACT JS',
        'ANGULAR JS',
        'PHP',
    ]
    //ARRAY EXAMPLE 2
    var array = [1, 2, 3, 4, 5, 6];
    
    //forEach()
    //1. Create forEach();
    Array.prototype.forEach2 = function (callback) {
        var length = this.length;
        for (i = 0; i < length; i++) {
            callback(this[i], i);
        }
    }
    //2. Using
    course.forEach2(function (valueCurrent, index) {
        console.log(index,valueCurrent);
    });
    
    //REDUCE()
    //1. Create reduce();
    Array.prototype.reduce2 = function (callback, initial) {
        var i = 0;
        var length = this.length;
        if (arguments.length < 2) {
            initial = this[0];
            i = 1;
        }
        var result = initial;
        for (; i < length; i++) {
            result = callback(result, this[i], i);
        }
        return result;
    }
    //2. Using
    var tong = array.reduce2(function (total, current, index) {
        return total + current;
    }, 0)
    console.log(tong);
    
    // FIN();
    //1. Create fin();
    Array.prototype.find2 = function (callback, value) {
        var bol;
        var array = [];
        for (var i = 0; i < this.length; i++) {
            bol = callback(this[i], i);
            if (bol === true) {
                return array = this[i];
            }
        }
        return value;
    }
    //2. Using
    var string = course.find2(function (valueCurrent) {
        return valueCurrent === 'PHP';
    });
    console.log(string);
    
    //filter()
    // <
    //1. Create filter();
    Array.prototype.filter2 = function (callback) {
        var result = [];
        var bol;
        var length = this.length;
        for (i = 0; i < length; i++) {
            bol = callback(this[i], i, this);
            if (bol == true) {
                result.push(this[i]);
            }
        }
        return result;
    }
    //2. Using
    var string = course.filter2(function (value, index, arr) {
        return value == 'PHP';
    })
    console.log(string);
 */

//Bài 30: Get element methods
/**
 * //HTML DOM
 * 1. Element: ID, class, tag, CSS selector, HTML collection
 * 2. Attribute
 * 3. Text
 * 
// var headingNode = document.getElementById('heading');
// console.log({
//     element: headingNode,
// });//By ID

// var headingNodes = document.getElementsByClassName('h1');
// console.log(headingNodes);//By class

// var pNode = document.getElementsByTagName('p');
// console.log(pNode);//By tag name

// var heading2Node = document.querySelectorAll('.box .heading_2');
// console.log(heading2Node[0]);//By CSS selection

// console.log(document.forms['form-1']);
// console.log(document.forms.testForm);//HTML collection
 
// var listItemNodes = document.querySelectorAll('.box_1 li');
// console.log(listItemNodes)

// var boxNode = document.querySelector('.box_1');
// console.log(boxNode.querySelectorAll('li'));
// console.log(boxNode.getElementsByTagName('li'));
*/

//Bài 31: DOM attributes
/**
     var headingElement = document.querySelector('h1');
    headingElement.id = 'headingID';
    // headingElement.className = 'headingclassName';
    // headingElement.setAttribute('class', 'headingClass');
    headingElement.title = 'headingAttribute';
    console.log(headingElement);
    
    console.log(headingElement.getAttribute('class'));
 */

//Bài 32: InnerText vs textContent Property
/**
    var headingElement = document.querySelector('.heading');
    
    headingElement.innerText = 'New heading';
    headingElement.textContent = 'New heading';
    
    console.log(headingElement.innerText);
    console.log(headingElement.textContent);
 */

//Bài 33: InnerHTML vs OuterHTML Property
/**
     ------innerText-----
    Vd:  <h1 class=”heading”>Heading text</h1>
    .headingElement.innerText = ‘New heading’;  // biến Heading text thành New heading
    
    ------innerHTML-------
    vd:  <div class=”box”> …. </div>
    var boxElement = document.querySelector(‘.box’);
        boxElement.innerHTML = ‘<h1>Heading</h1>’  // thêm thẻ ‘<h1>Heading</h1> vào bên trong chỗ 3 chấm

    //////
    var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
    function render(courses) {
        var newCourse = courses.map(function(course) {
            return `<li>${course}</li>`;
        });
        var ulElement = document.querySelector(".courses-list");
        ulElement.innerHTML = newCourse.join('');
    }
    render(courses);
    
    var boxElement = document.querySelector('.box');
    console.log([boxElement]);
 */

//Bài 34: DOM CSS
/**
    //  var boxElement = document.querySelector('.box');
    
    // // boxElement.style.width = '200px';
    // // boxElement.style.height = '100px';
    // // boxElement.style.backgroundColor = 'blue';
    
    // Object.assign(boxElement.style, {
    //     width: '200px',
    //     height: '100px',
    //     backgroundColor: 'red'
    // });
    // console.log(boxElement.style);
 */

//Bài 35: ClassList Property
/**
 * - add
 * - contains
 * - remove
 * - toggle
    // var boxElement = document.querySelector('.box');
    // console.log(boxElement.classList.length);
    // console.log(boxElement.classList[0]);
    // console.log(boxElement.classList.value);
    // boxElement.classList.add('red', 'blue');
    // console.log(boxElement.classList.contains('red'));
    // setTimeout(() => {
    //     boxElement.classList.remove('red');
    // }, 3000);
    // setTimeout(() => {
    //     boxElement.classList.toggle('red');
    // }, 3000);
 */

//Bài 36: DOM events
/**
    var buttonElement = document.querySelector('button');
    buttonElement.onclick = function () {
        buttonElement.style.color = "#fff";
    }
    
    var valueInput
    var inputElement = document.querySelector('input[type="text"]');
    inputElement.oninput = function(e) {
        valueInput = e.target.value;
    }
    
    var checkInput;
    var inputElement = document.querySelector('input[type="checkbox"]');
    inputElement.onchange = function(e) {
        checkInput = e.target.checked;
    }
    
    var select;
    var selectElement = document.querySelector('select');
    selectElement.onchange = function(e) {
        select = e.target.value;
    }
    
    var valueInput
    var inputElement = document.querySelector('input[type="text"]');
    inputElement.onkeyup = function(e) {
        valueInput = e.target.value;
    }
    
    document.onkeyup = function(e) {
        console.log(e);
        switch(e.which) {
            case 27: 
                console.log('EXIT');
                break;
            case 13:
                console.log('SEND CHAT');
                break;
        }
    }

//preventDefault: Hành vi mặc định


//stopPropagation
 */

//Bài 37: Event listener
/**
    var btn = document.getElementById('btn');
    
    // setTimeout(function() {
    //     btn.onclick = function() {
    //         console.log('Viec 1');
        
    //         console.log('Viec 2');
        
    //         alert('Viec 3');
    //     };
    // }, 3000);
    
    btn.addEventListener('click', function(e) {
        console.log(Math.random());
    });

//Event listener khác DOM event
    // addEventListener sẽ không ghi đè các trình sự kiện,ngược lại DOM event sẽ ghi đè trình sự kiện hiện có
    // DOM event sẽ luôn hoạt động, trong khi addEventListener không hoạt động trong Internet Explorer trước phiên bản 9. Bạn có thể sử dụng tương tự attachEvent
 */

//Bài 38: JSON
/**
 * 1. Là một định dạng dữ liệu (chuỗi)
 * 2. JavaScript Object Notation
 * 3. JSON: Number, Boolean, Null, Array, Object,String
 * 
 * //Mã Hóa / Giải mã
 * //Encode / decode
 * 
 * //Stringify: Từ JavaScript type -> JSON
 * //Parse: Từ JSON -> javascript type
    
    var jsonArray = '["javascript", "PHP"]';
    var jsonObject = '{"name":"Dai An}, "age":"12"}';
    
    console.log(JSON.parse(jsonArray));
 */

//Bài 39: Promise
/**
 * //sync: Đồng bộ
 * //async: Bất đồng bộ (setTimeout, setInterval, fetch, XMLHttpRequest, đọc file, requestAnimationFrame) -> Callback

 *  setTimeout(function() {
        console.log('Dòng này sẽ in ra sau')
    }, 0)
    // setTimeout là tác vụ bất động bộ (async)

    console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)

 * //Pain: Nỗi đau
    // Code thế này sẽ chạy đồng bộ
console.log('Step 1');
console.log('Step 2');
console.log('Step 3');
console.log('************************');

// Code thế này sẽ chạy bất đồng bộ
console.log('Step 1');
setTimeout(() => {
  console.log('Step 2');
  console.log('************************');
}, 0000); // ngay cả khi nó không mất giây nào
console.log('Step 3');

// Sử lý bất đồng bộ với callback hell :D

To cook rice, we need 15 minutes --> Mình để 15 giây cho nhanh
 * 1. get rice -> 1sec
 * 2. wash rice -> 2sec
 * 3. add water -> 1sec
 * 4. put rice in rice cooker -> 1sec
 * 5. cook rice -> 10sec
 * TOTAL = 15sec

// **********************
// Mình sử dụng ES6 arrow function syntax

const cookRice = () => {
    setTimeout(() => {
        console.log('Getting rice... 1s');
        setTimeout(() => {
            console.log('Washing rice... 2s');
    
            setTimeout(() => {
                console.log('Adding water... 1s');
        
                setTimeout(() => {
                    console.log('Putting in rice cooker... 1s');
                    setTimeout(() => {
                        console.log('Cooking rice... 10s');
                    }, 10000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 1000);
};
cookRice();

//Concept
    var promise = new Promise(
        //executor
        function(resolve, reject) {
            //Logic
            //Thành công: resolve()
            //Thất bại: reject()
        }
    );

    promise
        .then(function() {
            
        })
        .catch(function() {
            
        })
        .finally(function() {
            
        })

//Chain
    function sleep(ms) {
        return new Promise(function(resolve) {
            setTimeout(resolve, ms);
        });
    }

    sleep(1000)
        .then(function() {
            console.log(1);
            return sleep(1000);
        })
        .then(function() {
            console.log(2);
            return sleep(1000);
        })
        .then(function() {
            console.log(3);
            return sleep(1000);
        })
        .then(function() {
            console.log(4);
            return sleep(1000);
        })


//Callback hell
function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    });


//Promise methods(resolve, reject, all)
    // var promise = new Promise(function(resolve, reject) {
    //     resolve('success')
    // });
    // var promise = Promise.resolve('success');
    var promise = Promise.reject('error');

    promise
        .then(function(result) {
            console.log('result: ', result);
        })
        .catch(function(result) {
            console.log('error: ', result);
        })


//Promise example

 */

//Bài 40: Fetch
/** 
    var postApi = 'https://jsonplaceholder.typicode.com/posts';
    
    fetch(postApi)
        .then(function(response) {
            return response.json();
            //JSON.parse: JSON -> Javascript type
        })
        .then(function(posts) {
            var htmls = posts.map(function(post) {
                return `<li>
                    <h2>${post.title}</h2>
                    <h2>${post.body}</h2>
                </li>`
            });
    
            var html = htmls.join('');
            document.getElementById('post-block').innerHTML = html;
        })
        .catch(function(err) {
            alert('Có lỗi!');
        })

*/
//Bài 41: JSON server
/**
    var courseApi = 'http://localhost:3000/courses';
    
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(function(courses) {
            console.log(courses);
        })
        .catch(function (err) {
            console.log('Có lỗi'); 
        })
 */

//Bài 42: ECMAScript 6
/**
 * 1. Let const
 * 2. Template literals
 * 3. Arrow function
        const logger = (log) => {
            console.log(log);
        }
        logger('Message ...')
        
        const sum = (a, b) => a + b;
        console.log(sum(2, 3))
        
        const sum2 = (a, b) => ({a: a, b: b});
        console.log(sum2(2, 4));
        
        const logger2 = log2 => console.log(log2);
        logger2('Message ...');
 * 4. Classes
        class Course {
            constructor(name, price) {
                this.name = name;
                this.price = price;
            }
        
            getName() {
                return this.name;
            }
        
            getPrice() {
                return this.price;
            }
        }
        
        const phpCourse = new Course('PHP', 1000);
        const jsCourse = new Course('Javascript', 1000);
        
        console.log(phpCourse);
        console.log(jsCourse);
 * 5. Default parameter values //Giá trị mặc định
 * 6. Enhanced object literals
    Enhanced Object Literals giúp chúng ta: 
        - định nghĩa key dưới dạng biến cho object.
        - định nghĩa value dưới dạng biến cho object.
        - định nghĩa key-value cho object thông qua biến.
        - định nghĩa Method cho object không cần key.

    var name = 'Javascript'; var price = 1000; 

    //cách 1 Tạo Object ( theo tiêu chuẩn của object – các value là biến) 
    var course = { name: name, price: price , getName: function(){return name} };

    //cách 2 Tạo Object ( bỏ hết key của object )
    var course = { name, price , getName(){return this.name} }; //return ra value name
    var course = { name, price , getName(){return this.name} }; //return ra key name

    //cách 3 Tạo Object ( Các key là biến  [biến = key] : ‘value muốn nhập vô’ )
    var fieldName = ‘Name’ ; var fieldPrice = ‘Price’; 
    var course = { [fieldName]: ‘PHP’, [fieldPrice]: ‘1000’ , getName(){return fieldName} }; =>> return ra key : 'Name'
    var course = { [fieldName]: ‘PHP’, [fieldPrice]: ‘1000’ , getName(){return this[fieldName] }}; =>> return ra value của key: 'PHP'

 * 7. 
 */
