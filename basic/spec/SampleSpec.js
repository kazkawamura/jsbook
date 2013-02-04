describe("2", function() {

  function alert(str) {
    return str;
  };
  console.log = function(str) {
    this.last = str;
    return str;
  };
  beforeEach(function() {
  });
  describe(".1", function() {
    it("正常に実行できること", function() {
      alert("hello, world"); // ダイアログに「hello, world」と表示される
    });
  });
  describe(".2", function() {
    it("正常に実行できること", function() {
      // これはコメントです
      // 改行までコメントとなります // よってここもコメントです
      /* 複行コメントは閉じるまでがコメントです */
      /***************************************
       * よって,このように改行して 
       * コメントを記述できます
       ***************************************/
    });
  });
  describe(".3", function() {
    it("正常に実行できること", function() {
      console.log("hello, world"); 
    });
  });
  describe(".4", function() {
    it("正常に実行できること", function() {
      alert     (
             'hello, world!'     )           ;
    });
  });
  describe(".5", function() {
    it("正常に実行できること", function() {
      alert('Hello world!')
    });
  });
  describe(".6", function() {
    it("正常に実行できること", function() {
      return
      100
    });
  });
  describe(".7", function() {
    it("正常に実行できること", function() {
      var a;                // 変数aを宣言
      var b, c;             // 変数bとcを宣言
      var aa = 1;           // 変数aaを宣言して1で初期化
      var bb = 22, cc = 33; // 変数bbとccを宣言し,それぞれ22と33で初期化
      var bbb, ccc = 333;   // 変数bbbとcccを宣言し,後者のみ333で初期化
    });
    it("コメント通りに動作すること", function() {
      var aa = 1;           // 変数aaを宣言して1で初期化
      var bb = 22, cc = 33; // 変数bbとccを宣言し,それぞれ22と33で初期化
      var bbb, ccc = 333;   // 変数bbbとcccを宣言し,後者のみ333で初期化
      expect(aa).toBe(1);
      expect(bb).toBe(22);
      expect(cc).toBe(33);
      expect(bbb).toBeUndefined();
      expect(ccc).toBe(333);
    });
  });
  describe(".8", function() {
    it("正常に実行できること", function() {
      var a;    // 変数 a を宣言
      a=1;      // 1を代入
      a;         //=> 1
    });
    it("コメント通りに動作すること", function() {
      var a;    // 変数 a を宣言
      a=1;      // 1を代入
      expect(a).toBe(1);
    });
  });
  describe(".9", function() {
    it("例外が発生すること", function() {
      var sample = function() {
        var advice = "よくあるのは変数名のTYPOです";
        advise; //ReferenceError
      };
      expect(sample).toThrow();
    });
  });
  describe(".10", function() {
    it("正常に実行できること", function() {
      var advice
      advise = "よくあるのは変数名のTYPOです";
      advice; //undefined
    });
    it("コメント通りに動作すること", function() {
      var advice
      advise = "よくあるのは変数名のTYPOです";
      expect(advice).toBeUndefined();
    });
  });
  describe(".11", function() {
    it("正常に実行できること", function() {
      var a = 1;           // 数値で初期化
      a = true;             //論理値で更新
      a;                       //=> true
    });
    it("コメント通りに動作すること", function() {
      var a = 1;           // 数値で初期化
      a = true;             //論理値で更新
      expect(a).toBeTruthy();
    });
  });
  describe(".12", function() {
    it("正常に実行できること", function() {
      var obj = {
　      a: 1,
　      b: true
      };
    });
  });
  describe(".13", function() {
    it("正常に実行できること", function() {
      var obj = {
          a: 1 　　//この行を削除すると全ブラウザでエラーになる
         ,b: true 　//この行を削除してもカンマは残らない
      };
    });
  });
  describe(".14", function() {
    it("正常に実行できること", function() {
      var obj = {a: 1};
          obj.a = 2;
          obj.a;   //=> 2
    });
    it("コメント通りに動作すること", function() {
      var obj = {a: 1};
          obj.a = 2;
      expect(obj.a).toBe(2);
    });
  });
  describe(".15", function() {
    it("正常に実行できること", function() {
      var obj = {};
      obj.a = 1;
      "a" in obj;   //=> true
      delete obj.a;
      "a" in obj;       //=> false
      obj.a;           //=> undefined
      obj.b;           //=> undefined
    });
    it("コメント通りに動作すること", function() {
      var obj = {};
      obj.a = 1;
      expect("a" in obj).toBeTruthy();
      delete obj.a;
      expect("a" in obj).toBeFalsy();
      expect(obj.a).toBeUndefined();
      expect(obj.b).toBeUndefined();
    });
  });
  describe(".16", function() {
    it("正常に実行できること", function() {
      var employee = {
         _id: "a34524",
         name: "takeshi kawajiri",
         department: "ruby center"
      };
      employee.name; //=> "takeshi kawajiri"
    });
    it("コメント通りに動作すること", function() {
      var employee = {
         _id: "a34524",
         name: "takeshi kawajiri",
         department: "ruby center"
      };
      expect(employee.name).toBe("takeshi kawajiri")
    });
  });
  describe(".17", function() {
    it("正常に実行できること", function() {
      var a = ["aa", "bb", "cc"];
      a[0];  //=> "aa"
      a[1] = 1;
      a[1];  //=> 1
    });
    it("コメント通りに動作すること", function() {
      var a = ["aa", "bb", "cc"];
      expect(a[0]).toBe("aa");
      a[1] = 1;
      expect(a[1]).toBe(1);
    });
  });
  describe(".18", function() {
    it("正常に実行できること", function() {
      var a = [];
      a[100] = 1;
      a[100]; //=> 1
      a[200]; //=> undefined
      var o = {};
      o.a = 1;
      o.a;  //=> 1
      o.b;  //=> undefined
    });
    it("コメント通りに動作すること", function() {
      var a = [];
      a[100] = 1;
      expect(a[100]).toBe(1);
      expect(a[200]).toBeUndefined();
      var o = {};
      o.a = 1;
      expect(o.a).toBe(1);
      expect(o.b).toBeUndefined();
    });
  });
  describe(".19", function() {
    it("正常に実行できること", function() {
      var a = "hello";
      a += " world"; // a = a + " world" と同義
      a; //=> "hello world"
    });
    it("コメント通りに動作すること", function() {
      var a = "hello";
      a += " world"; // a = a + " world" と同義
      expect(a).toBe("hello world");
    });
  });
  describe(".20", function() {
    it("正常に実行できること", function() {
      function a(b){ var b = b || 1; return b;} //引数bのデフォルト値は1
      a();    //=> 1
      a(2);  //=> 2
      a(""); //=> 1
    });
    it("コメント通りに動作すること", function() {
      function a(b){ var b = b || 1; return b;} //引数bのデフォルト値は1
      expect(a()).toBe(1);
      expect(a(2)).toBe(2);
      expect(a("")).toBe(1);
    });
  });
  describe(".21", function() {
    it("正常に実行できること", function() {
      function sum(a, b) {
        return a + b;
      }
      sum(1, 2);  //=> 3
    });
    it("コメント通りに動作すること", function() {
      function sum(a, b) {
        return a + b;
      }
      expect(sum(1, 2)).toBe(3);
    });
  });
  describe(".22", function() {
    it("正常に実行できること", function() {
      function ignore_first_param(a, b) { return b; } //引数が足りない場合 
      ignore_first_param(1); //=> undefined
      function no_params() { return arguments[0];} //引数が多すぎる場合
      no_params(1); //=> 1
    });
    it("コメント通りに動作すること", function() {
      function ignore_first_param(a, b) { return b; } //引数が足りない場合 
      expect(ignore_first_param(1)).toBeUndefined(); 
      function no_params() { return arguments[0];} //引数が多すぎる場合
      expect(no_params(1)).toBe(1);
    });
  });
  describe(".23", function() {
    it("正常に実行できること", function() {
      eval("if(true){1;}else{2;}"); //=> 1
    });
    it("コメント通りに動作すること", function() {
      var result = eval("if(true){1;}else{2;}");
      expect(result).toBe(1);
    });
  });
  describe(".24", function() {
    it("正常に実行できること", function() {
      if(1 < 2){} // 関係式なので妥当
      if({a:1, b:2}){} // 基本式なので妥当
      // if({a:1, b:2};){} // 式文なのでエラー
      // if(var a = 1;){} // 変数文なのでエラー
    });
  });
  describe(".25", function() {
    it("正常に実行できること", function() {
      if(1 < 2) var a=1; // 変数文は文なので妥当
      if(1 < 2) if(1 < 2); // if文は文なので妥当
      if(1 < 2)(1 < 2) // 基本式にセミコロンが挿入されて式文となるので妥当
      if(1 < 2); // 空文なので妥当
    });
  });
  describe(".26", function() {
    it("正常に実行できること", function() {
      if(1<2){
        console.log(1);
      } else {
        console.log(2);
      } 　//=> 1 と表示される
    });
    it("コメント通りに動作すること", function() {
      if(1<2){
        console.log(1);
      } else {
        console.log(2);
      } 　//=> 1 と表示される
      expect(console.last).toBe(1)
    });
  });
  describe(".27", function() {
    it("正常に実行できること", function() {
      {a: 1};
      // {a: 1, b: 2};
    });
  });
  describe(".28", function() {
    it("正常に実行できること", function() {
      if(true){};  // 空オブジェクトを生成? 空のブロックを実行? 
      for(var i=0; i<3; i++){}; // 空オブジェクトを3個生成? 空の処理を3回実行?
    });
  });
  describe(".29", function() {
    it("正常に実行できること", function() {
      var json_str = '{"a":1}';
      var json = eval("(" + json_str + ")"); //OK
      //eval(json_str); //ERROR
    });
  });
  describe(".30", function() {
    it("正常に実行できること", function() {
      // function(){}()    //ERROR
      (function(){})(); //OK
      (function(){}()); //OK
      !function(){}();  //OK
      var a = function(){
　　     return "無名関数にカッコなど蛇足"; 
      }(); //OK
    });
  });
  describe(".31", function() {
    it("正常に実行できること", function() {
      switch(2){
        case 1: console.log(1); break;
        case 2: console.log(2); break;
        case 3:
        console.log(3);
        console.log(4);
        dafault: console.log(5); break;
      } //=> 2と表示される
    });
    it("コメント通りに動作すること", function() {
      switch(2){
        case 1: console.log(1); break;
        case 2: console.log(2); break;
        case 3:
        console.log(3);
        console.log(4);
        dafault: console.log(5); break;
      } //=> 2と表示される
      expect(console.last).toBe(2);
    });
  });
  describe(".32", function() {
    it("正常に実行できること", function() {
      var i = 0;
      while(i < 3) {
        console.log(i ++);
      } // 0から2までが表示される
    });
    it("コメント通りに動作すること", function() {
      var i = 0;
      var console = [];
      while(i < 3) {
        console.push(i ++);
      }
      expect(console).toEqual([0, 1, 2]);
    });
  });
  describe(".33", function() {
    it("正常に実行できること", function() {
      var i = 0; 
      do {
      　　alert(++i);
      } while(i < 3); // 1から3までが表示される
    });
    it("コメント通りに動作すること", function() {
      var i = 0; 
      var console = [];
      do {
      　　console.push(++i);
      } while(i < 3); // 1から3までが表示される
      expect(console).toEqual([1, 2, 3]);
    });
  });
  describe(".34", function() {
    it("正常に実行できること", function() {
      var array = ["a", "b", "c"];
      for(var i = 0; i < array.length; i++) {
      　console.log(array[i]); 
      } //=> aからcまで表示される
    });
    it("コメント通りに動作すること", function() {
      var array = ["a", "b", "c"];
      var console = [];
      for(var i = 0; i < array.length; i++) {
      　console.push(array[i]); 
      } //=> aからcまで表示される
      expect(console).toEqual(["a", "b", "c"]);
    });
  });
  describe(".35", function() {
    it("正常に実行できること", function() {
      for(var i=0, j =0; i < 3; i++, j++) {
        console.log(i + j);
      } //0,2,4と表示される
    });
    it("コメント通りに動作すること", function() {
      var console = [];
      for(var i=0, j =0; i < 3; i++, j++) {
        console.push(i + j);
      } //0,2,4と表示される
      expect(console).toEqual([0, 2, 4]);
    });
  });
  describe(".36", function() {
    it("正常に実行できること", function() {
      var obj = {a: 1, b:2, c:3};
      for(var key in obj) {
        console.log(key + ":" + obj[key]); 
      } //=>「a:1」「b:2」「c:3」と表示される
    });
    it("コメント通りに動作すること", function() {
      var obj = {a: 1, b:2, c:3};
      var console = [];
      for(var key in obj) {
        console.push(key + ":" + obj[key]); 
      } //=>「a:1」「b:2」「c:3」と表示される
      expect(console).toEqual(["a:1", "b:2", "c:3"]);
    });
  });
  describe(".37", function() {
    it("正常に実行できること", function() {
      var obj = {a: 1, b:2, c:3}, i = 0, arr = [];
      for(arr[i ++] in obj);
      arr; //=> ["a", "b", "c"]
    });
    it("コメント通りに動作すること", function() {
      var obj = {a: 1, b:2, c:3}, i = 0, arr = [];
      for(arr[i ++] in obj);
      expect(arr).toEqual(["a", "b", "c"]);
    });
  });
  describe(".38", function() {
    it("正常に実行できること", function() {
      var a = 1;
      var b = a;
      b++;            // 本操作は元の変数 a に影響しない
      a; //=> 1
      b; //=> 2
    });
    it("コメント通りに動作すること", function() {
      var a = 1;
      var b = a;
      b++;            // 本操作は元の変数 a に影響しない
      expect(a).toBe(1);
      expect(b).toBe(2);
    });
  });
  describe(".39", function() {
    it("正常に実行できること", function() {
      function incremate(input) {
        input ++;
      }
      var a = 1;
      incremate(a);
      a; //=> 1
    });
    it("コメント通りに動作すること", function() {
      function incremate(input) {
        input ++;
      }
      var a = 1;
      incremate(a);
      expect(a).toBe(1);
    });
  });
  describe(".40", function() {
    it("正常に実行できること", function() {
      var obj_a = {
        a: 1
      };
    });
  });
  describe(".41", function() {
    it("正常に実行できること", function() {
      var obj_a = {
        a: 1
      };
      var obj_b = obj_a;
      obj_a.a ++; // 本操作は元の変数に影響を与える
      obj_a.a; //=>2
      obj_b.a; //=>2
    });
    it("コメント通りに動作すること", function() {
      var obj_a = {
        a: 1
      };
      var obj_b = obj_a;
      obj_a.a ++; // 本操作は元の変数に影響を与える
      expect(obj_a.a).toBe(2);
      expect(obj_b.a).toBe(2);      
    });
  });
  describe(".42", function() {
    it("正常に実行できること", function() {
      function incremate(input) {
        input.a ++;
      }
      var obj_a = {
        a: 1
      };
      incremate(obj_a);
      obj_a.a; //=> 2
    });
    it("コメント通りに動作すること", function() {
      function incremate(input) {
        input.a ++;
      }
      var obj_a = {
        a: 1
      };
      incremate(obj_a);
      expect(obj_a.a).toBe(2);
    });
  });
  describe(".43", function() {
    it("正常に実行できること", function() {
      function replace(input) {
        input = {a: 100};
      }
      var obj = {a: 1};
      replace(obj);
      obj.a; //=> 1;
    });
    it("コメント通りに動作すること", function() {
      function replace(input) {
        input = {a: 100};
      }
      var obj = {a: 1};
      replace(obj);
      expect(obj.a).toBe(1);
    });
  });
  describe(".44", function() {
    it("正常に実行できること", function() {
      var array = [1, 2];
      array.a = 3;
      array.a; //=> 3
    });
    it("コメント通りに動作すること", function() {
      var array = [1, 2];
      array.a = 3;
      expect(array.a).toBe(3);
    });
  });
  describe(".45", function() {
    it("正常に実行できること", function() {
      var obj = {};
      obj["dynamic_prop"] = 1;
      obj["dynamic_" + "prop"]; //=> 1
      obj.dynamic_prop; //=> 1
    });
    it("コメント通りに動作すること", function() {
      var obj = {};
      obj["dynamic_prop"] = 1;
      expect(obj["dynamic_" + "prop"]).toBe(1);
      expect(obj.dynamic_prop).toBe(1);
    });
  });
  describe(".46", function() {
    it("正常に実行できること", function() {
      function get_value(){ return 1;};
      var obj = {
        a: get_value()
      };
    });
  });
  describe(".47", function() {
    it("正常に実行できること", function() {
      var obj = {
        a: 1,
        b: { 
           aa: 2
        } 
      };
      obj.b; //=> {aa: 2}
      obj.b.aa; //=> 2
      var array = [
        1,
        [
          2
        ]
      ];
      array[1]; //=> [2]
      array[1][0]; //=> 2
    });
    it("コメント通りに動作すること", function() {
      var obj = {
        a: 1,
        b: { 
           aa: 2
        } 
      };
      expect(obj.b).toEqual({aa: 2});
      expect(obj.b.aa).toBe(2);
      var array = [
        1,
        [
          2
        ]
      ];
      expect(array[1]).toEqual([2]);
      expect(array[1][0]).toBe(2);
    });
  });
  describe(".48", function() {
    it("正常に実行できること", function() {
      var str = new String; // 引数がない場合は new 式ではカッコの省略が可能
      String.a = 1;
      String.a; //=> 1
      str.b = 2;
      str.b; //=>2
    });
    it("コメント通りに動作すること", function() {
      var str = new String; // 引数がない場合は new 式ではカッコの省略が可能
      String.a = 1;
      expect(String.a).toBe(1);
      str.b = 2;
      expect(str.b).toBe(2);
    });
  });
  describe(".49", function() {
    it("正常に実行できること", function() {
      var str = new String("a,b,c");
      str.split(","); //=> [a, b, c]
    });
    it("コメント通りに動作すること", function() {
      var str = new String("a,b,c");
      expect(str.split(",")).toEqual(["a", "b", "c"]);
    });
  });
  describe(".50", function() {
    it("正常に実行できること", function() {
      "a,b,c".split(","); //=> [a, b, c]
      (new String("a,b,c")).split(","); //=> [a, b, c]
    });
    it("コメント通りに動作すること", function() {
      "a,b,c".split(","); //=> [a, b, c]
      expect((new String("a,b,c")).split(",")).toEqual(["a", "b", "c"]);
    });
  });
  describe(".51", function() {
    it("正常に実行できること", function() {
      var str = "test";
      str.a = 1;
      str.a;  //=> undefined
    });
    it("コメント通りに動作すること", function() {
      var str = "test";
      str.a = 1;
      expect(str.a).toBeUndefined();
    });
  });
  describe(".52", function() {
    it("正常に実行できること", function() {
      var str = "test";
      (new String(str)).a = 1;
      (new String(str)).a;  //=> undefined
    });
    it("コメント通りに動作すること", function() {
      var str = "test";
      (new String(str)).a = 1;
      expect((new String(str)).a).toBeUndefined();
    });
  });
  describe(".53", function() {
    it("正常に実行できること", function() {
      new String("a") + new String("b");  //=> "ab"
      new Number(1) + 2; //=> 3;
      +(new Number(3)); //=> 3;
    });
    it("コメント通りに動作すること", function() {
      expect(new String("a") + new String("b")).toBe("ab");
      expect(new Number(1) + 2).toBe(3);
      expect(+(new Number(3))).toBe(3);
    });
  });
  describe(".54", function() {
    it("正常に実行できること", function() {
      String.prototype.emphasize = function(){ // 独自メソッドを定義
        return this + "!";
      };
      "test".emphasize();  //=> "test!"
    });
    it("コメント通りに動作すること", function() {
      String.prototype.emphasize = function(){ // 独自メソッドを定義
        return this + "!";
      };
      expect("test".emphasize()).toBe("test!");
    });
  });
  describe(".55", function() {
    it("正常に実行できること", function() {
      "a1@".length; //=> 3
      "日本語".length; //=> 3
    });
    it("コメント通りに動作すること", function() {
      expect("a1@".length).toBe(3);
      expect("日本語".length).toBe(3);
    });
  });
  describe(".56", function() {
    it("正常に実行できること", function() {
      '<p class="title"></p>';
    });
  });
  describe(".57", function() {
    it("正常に実行できること", function() {
      "a\"aa"; //=> "a"aa"
    });
    it("コメント通りに動作すること", function() {
      expect("a\"aa").toBe('a"aa')
    });
  });
  describe(".58", function() {
    it("正常に実行できること", function() {
      for(var i = 0, str = "abc"; i < str.length; i++) { 
        console.log(str[i]); // または str.charAt(i)
      } //「a」「b」「c」と表示される
    });
    it("コメント通りに動作すること", function() {
      var console = [];
      for(var i = 0, str = "abc"; i < str.length; i++) { 
        console.push(str[i]); // または str.charAt(i)
      } //「a」「b」「c」と表示される
      expect(console).toEqual(["a", "b", "c"]);
    });
  });
  describe(".59", function() {
    it("正常に実行できること", function() {
      "JavaScript".replace("Script", "");  //=> "Java"
      "JavaScript".substring(4, 10);       //=> "Script"
      "JavaScript".slice(4);               //=> "Script"
    });
    it("コメント通りに動作すること", function() {
      expect("JavaScript".replace("Script", "")).toEqual("Java");
      expect("JavaScript".substring(4, 10)).toEqual("Script");
      expect("JavaScript".slice(4)).toEqual("Script");
    });
  });
  describe(".60", function() {
    it("正常に実行できること", function() {
      "JavaScript".indexOf("Script");       //=> 4
      "JavaScript".lastIndexOf("Script");  //=> 4
      "JavaScript".search("Script");   //=> 4
    });
    it("コメント通りに動作すること", function() {
      expect("JavaScript".indexOf("Script")).toEqual(4);
      expect("JavaScript".lastIndexOf("Script")).toEqual(4);
      expect("JavaScript".search("Script")).toEqual(4);
    });
  });
  describe(".61", function() {
    it("正常に実行できること", function() {
      "Ajax is not AJAX".toUpperCase(); //=> "AJAX IS NOT AJAX";
      ["aa", "bb", "cc"].join("?"); //=> "aa?bb?cc"
      "aa?bb?cc".split("?"); //=> ["aa", "bb", "cc"]
    });
    it("コメント通りに動作すること", function() {
      expect("Ajax is not AJAX".toUpperCase()).toEqual("AJAX IS NOT AJAX");
      expect(["aa", "bb", "cc"].join("?")).toEqual("aa?bb?cc");
      expect("aa?bb?cc".split("?")).toEqual(["aa", "bb", "cc"]);
    });
  });
  describe(".62", function() {
    it("正常に実行できること", function() {
      switch("test") {
        case "test": //実行される 
      } 
    });
    it("コメント通りに動作すること", function() {
      switch("test") {
        case "test": console.log("ok")
      } 
      expect(console.last).toBe("ok");
    });
  });
  describe(".63", function() {
    it("正常に実行できること", function() {
      "123" < "alphabet"; //=> true 
      "alphabet" < "日本語"; //=> true 
    });
    it("コメント通りに動作すること", function() {
      expect("123" < "alphabet").toBeTruthy();
      expect("alphabet" < "日本語").toBeTruthy();
    });
  });
  describe(".64", function() {
    it("正常に実行できること", function() {
      1 / - 0        //=> -Infinity
      0 / 0;         //=> NaN
      1 / Infinity;  //=> 0
      Infinity + 1;  //=> Infinity
      Infinity - Infinity; //=> NaN
    });
    it("コメント通りに動作すること", function() {
      expect(1 / - 0).toBe(-Infinity);
      expect(0 / 0).toBeNaN();
      expect(1 / Infinity).toBe(0);
      expect(Infinity + 1).toBe(Infinity);
      expect(Infinity - Infinity).toBeNaN();
    });
  });
  describe(".65", function() {
    it("正常に実行できること", function() {
      99; //10 進リテラル
      0xFF; // 16 進リテラル //=> 255 
      077; // 8進リテラル //=> 63
    });
    it("コメント通りに動作すること", function() {
      expect(0xFF).toBe(255);
      expect(077).toBe(63);
    });
  });
  describe(".66", function() {
    it("正常に実行できること", function() {
      0.1;
      .1; //=> 0.1
      1.; //=> 1
      2.3; // 変数 2 は定義できないので小数点のドットである 
      // 2.a; // 小数点のドットと解釈されるのでエラーとなる 
      (2).a; //プロパティアクセサと解釈されてundefinedが返る
    });
    it("コメント通りに動作すること", function() {
      expect(.1).toBe(0.1);
      expect(1.).toBe(1);
      expect((2).a).toBeUndefined();
    });
  });
  describe(".67", function() {
    it("正常に実行できること", function() {
      0.1 + 0.1 + 0.1; //=> 0.30000000000000004
      (1 + 1 + 1) / 10; //=> 0.3
    });
    it("コメント通りに動作すること", function() {
      expect(0.1 + 0.1 + 0.1).not.toBe(0.3);
      expect((1 + 1 + 1) / 10).toBe(0.3);
    });
  });
  describe(".68", function() {
    it("正常に実行できること", function() {
      Math.floor(12.3);  //=> 12
      ~~12.3  //=> 12
    });
    it("コメント通りに動作すること", function() {
      expect(Math.floor(12.3)).toBe(12);
      expect(~~12.3).toBe(12);
    });
  });
  describe(".69", function() {
    it("正常に実行できること", function() {
      2E1; // 2 * 10
      2e+2; // 2 * 10 * 10
      1.2E-2; // 1.2 / 10 / 10
      1.2 * Math.pow(10, -2); // 1.2 * (1 / 10 / 10)
    });
    it("コメント通りに動作すること", function() {
      expect(2E1).toBe(2 * 10);
      expect(2e+2).toBe(2 * 10 * 10);
      expect(1.2E-2).toBe(1.2 / 10 / 10);
      expect(1.2 * Math.pow(10, -2)).toBe(1.2 * (1 / 10 / 10));
    });
  });
  //ここまで
  describe(".70", function() {
    it("正常に実行できること", function() {
      (1.234).toFixed(2); //=> "1.23"
      (1.234).toExponential(2); // => "1.23e+0"
      (1.234).toPrecision(2); //=> "1.2"
    });
    it("コメント通りに動作すること", function() {
      expect((1.234).toFixed(2)).toBe("1.23");
      expect((1.234).toExponential(2)).toBe("1.23e+0");
      expect((1.234).toPrecision(2)).toBe("1.2");
    });
  });
  describe(".71", function() {
    it("正常に実行できること", function() {
      if(new Boolean(false)) { 
      　　// 実行される
      }
    });
    it("コメント通りに動作すること", function() {
      if(new Boolean(false)) { 
      　　console.log("exe");
      }
      expect(console.last).toBe("exe");
    });
  });
  describe(".72", function() {
    it("正常に実行できること", function() {
      if(false.valueOf()) {
      　 // 実行されない
      }
    });
    it("コメント通りに動作すること", function() {
      if(false.valueOf()) {
      　　console.log("skip");
      }
      expect(console.last).not.toBe("skip");
    });
  });
  describe(".73", function() {
    it("正常に実行できること", function() {
      function is_undefined(input) {
        return typeof input == "undefined";
      }
      is_undefined(undefined); //=> true
      is_undefined(1); //=> false
      is_undefined(null); //=> false
    });
    it("コメント通りに動作すること", function() {
      function is_undefined(input) {
        return typeof input == "undefined";
      }
      expect(is_undefined(undefined)).toBeTruthy();
      expect(is_undefined(1)).toBeFalsy();
      expect(is_undefined(null)).toBeFalsy();
    });
  });
  describe(".74", function() {
    it("正常に実行できること", function() {
      function is_undefined(input) {
        return input == void(0);
      }
      is_undefined(undefined); //=> true
      is_undefined(1); //=> false
      is_undefined(null); //=> true
    });
    it("コメント通りに動作すること", function() {
      function is_undefined(input) {
        return input == void(0);
      }
      expect(is_undefined(undefined)).toBeTruthy();
      expect(is_undefined(1)).toBeFalsy();
      expect(is_undefined(null)).toBeTruthy();
    });
  });
  describe(".75", function() {
    it("正常に実行できること", function() {
      function is_undefined(input) {
        return input == undefined;
      }
      is_undefined(undefined); //=> true
      is_undefined(1); //=> false
      is_undefined(null); //=> true
    });
    it("コメント通りに動作すること", function() {
      function is_undefined(input) {
        return input == undefined;
      }
      expect(is_undefined(undefined)).toBeTruthy();
      expect(is_undefined(1)).toBeFalsy();
      expect(is_undefined(null)).toBeTruthy();
    });
  });
  describe(".76", function() {
    it("例外が発生すること", function() {
      var sample = function() {
        (undefined).a;
      };
      expect(sample).toThrow();
    });
  });
  describe(".77", function() {
    it("正常に実行できること", function() {
      new Number(1) instanceof Number; //=> true
      new Number(1) instanceof Object; //=> true
      ({a: 1}) instanceof Object; //=> true
      [1] instanceof Array; //=> true
      [1] instanceof Object; //=> true
      1 instanceof Object; //=> false
    });
    it("コメント通りに動作すること", function() {
      expect(new Number(1) instanceof Number).toBeTruthy();
      expect(new Number(1) instanceof Object).toBeTruthy();
      expect(({a: 1}) instanceof Object).toBeTruthy();
      expect([1] instanceof Array).toBeTruthy();
      expect([1] instanceof Object).toBeTruthy();
      expect(1 instanceof Object).toBeFalsy();
    });
  });
  describe(".78", function() {
    it("正常に実行できること", function() {
      var obj = Object.create(null);
      obj.a = 1;
      obj.a; //=> 1
      obj instanceof Object; //=> false
      obj.toString; //=> undefined
    });
    it("コメント通りに動作すること", function() {
      var obj = Object.create(null);
      obj.a = 1;
      expect(obj.a).toBe(1);
      expect(obj instanceof Object).toBeFalsy();
      expect(obj.toString).toBeUndefined();
    });
  });
  describe(".79", function() {
    it("正常に実行できること", function() {
      var mystr = Object.create(String.prototype, {
        a:{
          value: 1
        }
      });
      mystr instanceof String; //=> true
      mystr.a; //=> 1
    });
    it("コメント通りに動作すること", function() {
      var mystr = Object.create(String.prototype, {
        a:{
          value: 1
        }
      });
      expect(mystr instanceof String).toBeTruthy();
      expect(mystr.a).toBe(1);
    });
  });
  describe(".80", function() {
    it("正常に実行できること", function() {
      var obj = new Object;
      obj.a = 1;
      var array = new Array;
      array[0] = 1;

      var obj = { a: 1 };
      var array = [1];
    });
    it("両者が等しいこと", function() {
      var obj1 = new Object;
      obj1.a = 1;
      var array1 = new Array;
      array1[0] = 1;

      var obj2= { a: 1 };
      var array2 = [1];
      expect(obj1).toEqual(obj2);
      expect(array1).toEqual(array2);
    });
  });
  describe(".81", function() {
    it("正常に実行できること", function() {
      Array.prototype.join_by_plus = function() {
        return this.join("+");
      };
      ["a", "b"].join_by_plus(); //=> "a+b";
    });
    it("コメント通りに動作すること", function() {
      Array.prototype.join_by_plus = function() {
        return this.join("+");
      };
      expect(["a", "b"].join_by_plus()).toEqual("a+b");
    });
  });
  describe(".82", function() {
    it("正常に実行できること", function() {
      var array = [1, 2];
      for(key in array) {
        console.log(key);
      } // 0と1とjoin_by_plusが出力される
    });
    it("コメント通りに動作すること", function() {
      var array = [1, 2];
      var console = [];
      for(key in array) {
        console.push(key);
      } // 0と1とjoin_by_plusが出力される
      expect(console).toEqual(["0", "1", "join_by_plus"])
    });
  });
  describe(".83", function() {
    it("正常に実行できること", function() {
      ({}).toString(); //=> "[object Object]"
      "result: " + {}; //=> "result: [object Object]"
      [1, 2].toString(); //=> "1,2"
    });
    it("コメント通りに動作すること", function() {
      expect(({}).toString()).toBe("[object Object]");
      expect("result: " + {}).toBe("result: [object Object]");
      expect([1, 2].toString()).toBe("1,2");
    });
  });
  describe(".84", function() {
    it("正常に実行できること", function() {
      ({a: 1}).hasOwnProperty("a"); //=> true
      ({a: 1}).hasOwnProperty("b"); //=> false
      [1,2].hasOwnProperty("0"); //=> true
    });
    it("コメント通りに動作すること", function() {
      expect(({a: 1}).hasOwnProperty("a")).toBeTruthy();
      expect(({a: 1}).hasOwnProperty("b")).toBeFalsy();
      expect([1,2].hasOwnProperty("0")).toBeTruthy();
    });
  });
  describe(".85", function() {
    it("正常に実行できること", function() {
      var stack = [];
      stack.push("a"); //=> 1
      stack.push("b"); //=> 2
      stack.pop(); //=> "b"
      stack; //=> ["a"];
    });
    it("コメント通りに動作すること", function() {
      var stack = [];
      expect(stack.push("a")).toBe(1);
      expect(stack.push("b")).toBe(2);
      expect(stack.pop()).toBe("b");
      expect(stack).toEqual(["a"]);
    });
  });
  describe(".86", function() {
    it("正常に実行できること", function() {
      var queue = [];
      queue.unshift("a"); //=> 1
      queue.unshift("b"); //=> 2
      queue.pop(); //=> "a"
      queue; //=> ["b"]
    });
    it("コメント通りに動作すること", function() {
      var queue = [];
      expect(queue.unshift("a")).toBe(1);
      expect(queue.unshift("b")).toBe(2);
      expect(queue.pop()).toBe("a");
      expect(queue).toEqual(["b"]);
    });
  });
  describe(".87", function() {
    it("正常に実行できること", function() {
      ["a"].concat(["b"]); //=> ["a", "b"]
      ["a", "b", "c"].slice(1, 3); //=> ["b", "c"]
      var input = ["a", "b", "c"];
      input.splice(1, 3, "bb", "cc");
      input; //=> ["a", "bb", "cc"];
    });
    it("コメント通りに動作すること", function() {
      expect(["a"].concat(["b"])).toEqual(["a", "b"]);
      expect(["a", "b", "c"].slice(1, 3)).toEqual(["b", "c"]);
      var input = ["a", "b", "c"];
      input.splice(1, 3, "bb", "cc");
      expect(input).toEqual(["a", "bb", "cc"]);
    });
  });
  describe(".88", function() {
    it("正常に実行できること", function() {
      ["b", "a", "c"].sort(); //=> ["a", "b", "c"]
      ["b", "a", "c"].reverse(); //=> ["c", "a", "b"]
    });
    it("コメント通りに動作すること", function() {
      expect(["b", "a", "c"].sort()).toEqual(["a", "b", "c"]);
      expect(["b", "a", "c"].reverse()).toEqual(["c", "a", "b"]);
    });
  });
  describe(".89", function() {
    it("正常に実行できること", function() {
      var pattern_1 = /(.*)Script/;
      var pattern_2 = new RegExp("(.*)Script");
    });
  });
  describe(".90", function() {
    it("正常に実行できること", function() {
      /(.*)Script/.test("JavaScript");  //=> true
      /(.*)Script/.test("Java");  //=> false
    });
    it("コメント通りに動作すること", function() {
      expect(/(.*)Script/.test("JavaScript")).toBeTruthy();
      expect(/(.*)Script/.test("Java")).toBeFalsy();
    });
  });
  describe(".91", function() {
    it("正常に実行できること", function() {
      /(.*)Script/.exec("JavaScript");  //=> ["JavaScript", "Java"]
      "JavaScript".match(/(.*)Script/);  //=> ["JavaScript", "Java"]
    });
    it("コメント通りに動作すること", function() {
      expect(/(.*)Script/.exec("JavaScript")).toEqual("JavaScript".match(/(.*)Script/));
    });
  });
  describe(".92", function() {
    it("正常に実行できること", function() {
      "JavaScript".search(/(.*)Script/);  //=> 0
    });
    it("コメント通りに動作すること", function() {
      expect("JavaScript".search(/(.*)Script/)).toBe(0);
    });
  });
  describe(".93", function() {
    it("正常に実行できること", function() {
      function a(){}
      a.b = 1;
      a.b; //=> 1
      typeof a; //=> "function"
    });
    it("コメント通りに動作すること", function() {
      function a(){}
      a.b = 1;
      expect(a.b).toBe(1);
      expect(typeof a).toBe("function");
    });
  });
  describe(".94", function() {
    it("正常に実行できること", function() {
      Object instanceof Function; //=> true
      String instanceof Function; //=> true
    });
    it("コメント通りに動作すること", function() {
      expect(Object instanceof Function).toBeTruthy();
      expect(String instanceof Function).toBeTruthy();
    });
  });
  describe(".95", function() {
    it("正常に実行できること", function() {
      var a = function(){};
      a.b = 1;
      a();
    });
  });
  describe(".96", function() {
    it("例外が発生すること", function() {
      var sample = function() {
        var a = function b(){
          return b;
        };
        a(); // Functionオブジェクトが返る 
        b; //=> ERROR
      };
      expect(sample).toThrow();
    });
    it("コメント通りに動作すること", function() {
      var a = function b(){
        return b;
      };
      a();
      expect(a() instanceof Function).toBeTruthy(); 
    });
  });
  describe(".97", function() {
    it("正常に動作すること", function() {
      func1();  //OK
      function func1(){}
    });
    it("例外が発生すること", function() {
      var sample = function() {
        func2(); //=>ERROR
        var func2 = function(){};
      };
      expect(sample).toThrow();
    });
  });
  describe(".98", function() {
    it("正常に実行できること", function() {
      var result = function(a, b) {
        return a + b;
      }(1, 2); //=> 3
    });
    it("コメント通りに動作すること", function() {
      var result = function(a, b) {
        return a + b;
      }(1, 2); //=> 3
      expect(result).toBe(3);
    });
  });
  describe(".99", function() {
    it("正常に実行できること", function() {
      ["aa", "b", "ccc"].sort(function(a, b){
        return a.length - b.length; // 辞書順ではなく文字列長でソート
      }); //=> ["b", "aa", "ccc"]
    });
    it("コメント通りに動作すること", function() {
      var result = ["aa", "b", "ccc"].sort(function(a, b){
        return a.length - b.length; // 辞書順ではなく文字列長でソート
      });
      expect(result).toEqual(["b", "aa", "ccc"]);
    });
  });
  describe(".100", function() {
    it("正常に実行できること", function() {
      var obj = {
        a: function(){
          return 1;
        }
      };
      obj.a(); //=> 1
    });
    it("コメント通りに動作すること", function() {
      var obj = {
        a: function(){
          return 1;
        }
      };
      expect(obj.a()).toBe(1);
    });
  });
  describe(".101", function() {
    it("正常に実行できること", function() {
      function a() {
        return function() {
          return 1; 
        }
      }
      a()(); //=> 1
    });
    it("コメント通りに動作すること", function() {
      function a() {
        return function() {
          return 1; 
        }
      }
      expect(a()()).toBe(1);
    });
  });
  describe(".102", function() {
    it("正常に実行できること", function() {
      window.a = 1;
      var closure = function() {
        var a = 2;
        return function() { //関数式で生成
          return a; 
        }
      };
      var normal = function() {
        var a = 2;
        return new Function("", "return a"); //Functionコンストラクタから生成
      }
      closure()(); //=> 2
      normal()(); //=> 1
    });
    it("コメント通りに動作すること", function() {
      window.a = 1;
      var closure = function() {
        var a = 2;
        return function() { //関数式で生成
          return a; 
        }
      };
      var normal = function() {
        var a = 2;
        return new Function("", "return a"); //Functionコンストラクタから生成
      }
      expect(closure()()).toBe(2); //=> 2
      expect(normal()()).toBe(1); //=> 1
    });
  });
  describe(".103", function() {
    it("正常に実行できること", function() {
      var obj = {
        a: 1,
        b: function() {
          return this.a;
        }
    　};
　    obj.b();  //=> 1
    });
    it("コメント通りに動作すること", function() {
      var obj = {
        a: 1,
        b: function() {
          return this.a;
        }
      };
      expect(obj.b()).toBe(1);
    });
  });
  describe(".104", function() {
    it("正常に実行できること", function() {
      function lookup_a() {
        return this.a;
      }
      var obj1 = {
        a: 1,
        b: lookup_a
      };
      var obj2 = {
        a: 2,
        b: lookup_a
      };
      obj1.b(); //=> 1
      obj2.b(); //=> 2
    });
    it("コメント通りに動作すること", function() {
      function lookup_a() {
        return this.a;
      }
      var obj1 = {
        a: 1,
        b: lookup_a
      };
      var obj2 = {
        a: 2,
        b: lookup_a
      };
      expect(obj1.b()).toBe(1); //=> 1
      expect(obj2.b()).toBe(2); //=> 2
    });
  });
  describe(".105", function() {
    it("正常に実行できること", function() {
      function lookup_a() {
        return this.a;
      }
      var obj1 = {
        a: 1,
        b: lookup_a
      };
      var obj2 = {
        a: 2,
        b: lookup_a
      };
      //----------------
      obj1.b.call(obj1); //=> 1
      obj2.b.call(obj1); //=> 1
      obj2.b.call({a: 100}); //=> 100
    });
    it("コメント通りに動作すること", function() {
      function lookup_a() {
        return this.a;
      }
      var obj1 = {
        a: 1,
        b: lookup_a
      };
      var obj2 = {
        a: 2,
        b: lookup_a
      };
      //----------------
      expect(obj1.b.call(obj1)).toBe(1);
      expect(obj2.b.call(obj1)).toBe(1);
      expect(obj2.b.call({a: 100})).toBe(100);
    });
  });
  describe(".106", function() {
    it("正常に実行できること", function() {
      function lookup_a() {
        return this.a;
      }
      var obj1 = {
        a: 1,
        b: lookup_a
      };
      var obj2 = {
        a: 2,
        b: lookup_a
      };
      //----------------
      lookup_a = lookup_a.bind({a: 100});
      obj1.b(); //=> 100
      obj2.b(); //=> 100
    });
    it("コメント通りに動作すること", function() {
      function lookup_a() {
        return this.a;
      }
      lookup_a = lookup_a.bind({a: 100});
      var obj1 = {
        a: 1,
        b: lookup_a
      };
      var obj2 = {
        a: 2,
        b: lookup_a
      };
      //----------------
      expect(obj1.b()).toBe(100);
      expect(obj2.b()).toBe(100);
    });
  });
  describe(".107", function() {
    it("正常に実行できること", function() {
      var a = 1;
      var a = 2;
      a; //=> 2
    });
    it("コメント通りに動作すること", function() {
      var a = 1;
      var a = 2;
      expect(a).toBe(2);
    });
  });
  describe(".108", function() {
    it("正常に実行できること", function() {
      var a = 1;
      // -- この時点でaは1 
      if(true) {
        var a = 10;
      }
      // -- この時点でaは10
      for(var a=0; a<100; a++){}; 
      // -- この時点でaは100
    });
    it("コメント通りに動作すること", function() {
      var a = 1;
      expect(a).toBe(1);
      // -- この時点でaは1 
      if(true) {
        var a = 10;
      }
      expect(a).toBe(10);
      // -- この時点でaは10
      for(var a=0; a<100; a++){}; 
      expect(a).toBe(100); 
      // -- この時点でaは100
    });
  });
  describe(".109", function() {
    it("正常に実行できること", function() {
      !function(){
        var a = 1; 
      }();
      // ここからはaを参照できない
    });
  });
  describe(".110", function() {
    it("正常に実行できること", function() {
      var g = 1;
      function outer() {
        var o = 1;
        function inner() {
          var i = 1;
          // ここで参照できるもの: i, o, g
        }
        // ここで参照できるもの: o, g
        inner();
      }
      // ここで参照できるもの: g 
      outer();
    });
  });
  describe(".111", function() {
    it("正常に実行できること", function() {
      var a = 1;
      b = 2;
      function c() { d = 4; }
      window.a; //=>1;
      window.b; //=>2;
      c(), d; //=> 4
    });
    it("コメント通りに動作すること", function() {
      var a = 1;
      b = 2;
      function c() { d = 4; }
      expect(window.a).toBe(1); //=>1;
      expect(window.b).toBe(2); //=>2;
      c(), d; //=> 4
      expect(d).toBe(4);
    });
  });
  describe(".112", function() {
    it("例外が発生すること", function() {
      var sample = function() {
        var a = 1;
        delete a; //=> false
        a; //=> 1
        b = 2;
        delete b; //=> true
        b; //=> Error
      };
      expect(sample).toThrow();
    });
    it("コメント通りに動作すること", function() {
        var a = 1;
        expect(delete a).toBeFalsy();
        expect(a).toBe(1);
        b = 2;
        expect(delete b).toBeTruthy();
    });
  });
  describe(".113", function() {
    it("正常に実行できること", function() {
      var sample = function() {
        window.e == undefined;  //OK
        e == undefined; //ERROR 
      };
      expect(sample).toThrow();
    });
  });
  describe(".114", function() {
    it("正常に実行できること", function() {
      var a = 1, b = 2;
      c = 3; // 宣言ではないので初期化されない
      var d = function(){
        var e = 4; // 関数内部なので初期化されない 
      };
      if(true) {
        function f(){}
      }
    });
  });
  describe(".115", function() {
    it("正常に実行できること", function() {
      function test(a, b) {
        var c = function(){};
      } 
      test(1);
    });
  });
  describe(".116", function() {
    it("正常に実行できること", function() {
      var obj = {};
      obj.a = 1;
      Object.isExtensible(obj); //=> true
      Object.preventExtensions(obj);
      Object.isExtensible(obj); //=> false
      obj.a = 2; //プロパティ値更新 
      obj.b = 3; //プロパティ追加
      obj.a; //=> 2
      obj.b; //=> undefined
    });
    it("コメント通りに動作すること", function() {
      var obj = {};
      obj.a = 1;
      expect(Object.isExtensible(obj)).toBeTruthy();
      Object.preventExtensions(obj);
      expect(Object.isExtensible(obj)).toBeFalsy();
      obj.a = 2; //プロパティ値更新 
      obj.b = 3; //プロパティ追加
      expect(obj.a).toBe(2);
      expect(obj.b).toBeUndefined();
    });
  });
  describe(".117", function() {
    it("正常に実行できること", function() {
      var b_value;
      var obj = {
        get b() { return b_value * 100; },
        set b(value) { b_value = value;}
      };
      obj.b = 1;
      obj.b; //=> 100
    });
    it("コメント通りに動作すること", function() {
      var b_value;
      var obj = {
        get b() { return b_value * 100; },
        set b(value) { b_value = value;}
      };
      obj.b = 1;
      expect(obj.b).toBe(100);
    });
  });
  describe(".118", function() {
    it("正常に実行できること", function() {
      var obj = {}, b_value;
      Object.defineProperties(obj, {
        a: { //データプロパティ aを定義
          enumerable: true, 
          configurable: true,
          value: 1,
          writable: false
        },
        b: { //アクセサプロパティ bを定義
          configurable: true,
          get: function(){ return b_value * 100; }, 
          set: function(value){ b_value = value; }
        }
      });
      //GenericDescriptor で更新 
      Object.defineProperty( obj, "b", {
        enumerable: true
      });
      Object.getOwnPropertyDescriptor(obj, "b"); //=> {enumerable: true....
    });
    it("コメント通りに動作すること", function() {
      var obj = {}, b_value;
      Object.defineProperties(obj, {
        a: { //データプロパティ aを定義
          enumerable: true, 
          configurable: true,
          value: 1,
          writable: false
        },
        b: { //アクセサプロパティ bを定義
          configurable: true,
          get: function(){ return b_value * 100; }, 
          set: function(value){ b_value = value; }
        }
      });
      //GenericDescriptor で更新 
      Object.defineProperty( obj, "b", {
        enumerable: true
      });
      expect(Object.getOwnPropertyDescriptor(obj, "b").enumerable).toBeTruthy();
    });
  });
  describe(".119", function() {
    it("正常に実行できること", function() {
      Object.prototype.a = function(){}; //メソッドaを定義
      var obj = {};
      for (var key in obj) { console.log(key) }; //=> aが表示される
    });
    it("コメント通りに動作すること", function() {
      Object.prototype.a = function(){}; //メソッドaを定義
      var obj = {};
      for (var key in obj) { console.log(key) }; //=> aが表示される
      expect(console.last).toBe("a");
    });
  });
  describe(".120", function() {
    it("正常に実行できること", function() {
      Object.defineProperty(Object.prototype, "a", {
        value: function(){},
        enumerable: false
      });
      var obj = {};
      for (var key in obj) { console.log(key) }; //=>aが表示されない 
      obj.a(); //=>実行可能
    });
  });
  describe(".121", function() {
    it("例外が発生すること", function() {
      var obj = {};
      Object.defineProperty(obj, "a", {
        writable: true,
        configurable: false
      });
      obj.a = 1; // 有効
      obj.a; //=> 1
      delete obj.a; //無効 
      obj.a; //=> 1
      var sample = function() {
        Object.defineProperty(obj, "a", {
          enumerable: true
        }); //例外が発生
      };
      expect(sample).toThrow();
    });
    it("コメント通りに動作すること", function() {
      var obj = {};
      Object.defineProperty(obj, "a", {
        writable: true,
        configurable: false
      });
      obj.a = 1; // 有効
      expect(obj.a).toBe(1);
      obj.a; //=> 1
      delete obj.a; //無効 
      expect(obj.a).toBe(1);
    });
  });
  describe(".122", function() {
    it("正常に実行できること", function() {
      Boolean(1); //=> true
      Number("1"); //=> 1
      String(1); //=> "1"
    });
    it("コメント通りに動作すること", function() {
      expect(Boolean(1)).toBeTruthy();
      expect(Number("1")).toBe(1);
      expect(String(1)).toBe("1");
    });
  });
  describe(".123", function() {
    it("正常に実行できること", function() {
      !~[1, 2].indexOf(1); //=> false
      !~[1, 2].indexOf(3); //=> true
    });
    it("コメント通りに動作すること", function() {
      expect(!~[1, 2].indexOf(1)).toBeFalsy();
      expect(!~[1, 2].indexOf(3)).toBeTruthy();
    });
  });
  describe(".124", function() {
    it("正常に実行できること", function() {
      1 == true //=> true
      1 === true //=> false
    });
    it("コメント通りに動作すること", function() {
      expect(1 == true).toBeTruthy();
      expect(1 === true).toBeFalsy();
    });
  });
  describe(".125", function() {
    it("正常に実行できること", function() {
      1 + null; //=> 1
    });
    it("コメント通りに動作すること", function() {
      expect(1 + null).toBe(1)
    });
  });
  describe(".126", function() {
    it("正常に実行できること", function() {
      [] + []; //=>""
    });
    it("コメント通りに動作すること", function() {
      expect([] + []).toBe("")
    });
  });
  describe(".127", function() {
    it("正常に実行できること", function() {
      setTimeout(function(){  //1 秒後に実行
        console.log("a");
      }, 1000);
      console.log("b");
    });
  });
  describe(".128", function() {
    it("正常に実行できること", function() {
      setTimeout(function(){
        console.log("a"); //setTimeoutからおよそ1秒後に実行
      }, 1000);
    });
  });
  describe(".129", function() {
    it("正常に実行できること", function() {
      setTimeout(function(){
        console.log("a"); //setTimeoutからおよそ1秒後に実行
      }, 1000);
      console.log("b");
    });
  });
  describe(".130", function() {
    it("正常に実行できること", function() {
      setTimeout(function(){
        console.log("a"); //setTimeoutからおよそ2秒後に実行
      }, 1000);
      /*---- ここに 2 秒かかる処理(ループなど)を挿入する ----*/
    });
  });
  describe(".131", function() {
    it("正常に実行できること", function() {
      setTimeout(function(){
        console.log(a); //=> 1
      }, 1);
      var a = 1;
    });
  });
  describe(".132", function() {
    it("正常に実行できること", function() {
      function return_function() {
        return function() {
        };
      }
      return_function();
    });
  });
  describe(".133", function() {
    it("正常に実行できること", function() {
      function return_scoped_function(a, b) {
        var c = 3;
        return function(d) {
          // 太字のものをここから参照できる
        };
      }
      return_scoped_function(1, 2);
    });
  });
  describe(".134", function() {
    it("正常に実行できること", function() {
      function make_counter() {
        var count = 0;
        return function() {
          console.log(++count);
        };
      }
      var counter1 = make_counter();
      counter1(); //=> 1
      var counter2 = make_counter();
      counter2(); //=> 1
      counter2(); //=> 2
    });
    it("コメント通りに動作すること", function() {
      var console = [];
      function make_counter() {
        var count = 0;
        return function() {
          console.push(++count);
        };
      }
      var counter1 = make_counter();
      counter1();
      var counter2 = make_counter();
      counter2();
      counter2();
      expect(console).toEqual([1,1,2]);
    });
  });
  describe(".135", function() {
    it("正常に実行できること", function() {
      function a() {
        var b = 1;
        return function() {
          console.log(b)
        };
      }
      var b, closure = a();
      b = 2;
      closure(); //=> 1と表示される
    });
    it("コメント通りに動作すること", function() {
      function a() {
        var b = 1;
        return function() {
          console.log(b)
        };
      }
      var b, closure = a();
      b = 2;
      closure(); //=> 1と表示される
      expect(console.last).toBe(1);
    });
  });
  describe(".136", function() {
    it("正常に実行できること", function() {
      function left(a) {
        return function(b) {
          return a + b;
        };
      }
      var right = left(1); 
      // 長い処理
      right(2); //=> 3
    });
    it("コメント通りに動作すること", function() {
      function left(a) {
        return function(b) {
          return a + b;
        };
      }
      var right = left(1); 
      // 長い処理
      expect(right(2)).toBe(3);
    });
  });
  describe(".137", function() {
    it("正常に実行できること", function() {
      for(var i = 0; i < 3; i++) {
        if(i == 1) break;
        console.log(i);
      } //=> 0だけが表示
    });
    it("コメント通りに動作すること", function() {
      var console = [];
      for(var i = 0; i < 3; i++) {
        if(i == 1) break;
        console.push(i);
      } //=> 0だけが表示
      expect(console).toEqual([0]);
    });
  });
  describe(".138", function() {
    it("正常に実行できること", function() {
      loop: for(var i = 0; i < 3; i++) { //ラベル付き文
        for (var j = 0; j < 3; j++) {
          if(i == 1) break loop;
          console.log(i, j);
        }
      } //=> 0,0 のみ表示
    });
    it("コメント通りに動作すること", function() {
      var console = [];
      loop: for(var i = 0; i < 3; i++) { //ラベル付き文
        for (var j = 0; j < 3; j++) {
          if(i == 1) break loop;
          console.push([i, j]);
        }
      } //=> 0,0 のみ表示
      expect(console).toEqual([[ 0, 0 ], [ 0, 1 ], [ 0, 2 ]])
    });
  });
  describe(".139", function() {
    it("エラーが発生すること", function() {
      var sample = function() {
        var error = new Error("何かが起こりました!"); 
        throw error;
      };
      expect(sample).toThrow();
    });
  });
  describe(".140", function() {
    it("正常に実行できること", function() {
      (new TypeError).name; //=> "TypeError"
    });
    it("コメント通りに動作すること", function() {
       expect((new TypeError).name).toBe("TypeError")
    });
  });
  describe(".141", function() {
    it("エラーが発生すること", function() {
      var sample = function() {
        throw "とにかく何かが起こったのです!";
      };
      expect(sample).toThrow();
    });
  });
  describe(".142", function() {
    it("正常に実行できること", function() {
      try {
        throw new TypeError("a");
      } catch(e) {
        e.name; //=> "TypeError"
        e.message; //=> "a"
      }
    });
    it("コメント通りに動作すること", function() {
      try {
        throw new TypeError("a");
      } catch(e) {
        expect(e.name).toBe("TypeError");
        expect(e.message).toBe("a");
      }
    });
  });
  describe(".143", function() {
    it("例外が発生すること", function() {
      var a = 1; 
      try {
        throw "";
      } catch(e) {
        a; //=> 1;
        var b = 2;
      }
      b; //=> 2;
      var sample = function() {
        e; //=> ERROR
      };
      expect(sample).toThrow();
    });
    it("コメント通りに動作すること", function() {
      var a = 1; 
      try {
        throw "";
      } catch(e) {
        expect(a).toBe(1)
        var b = 2;
      }
      expect(b).toBe(2);
    });
  });
  describe(".144", function() {
    it("正常に実行できること", function() {
      var a = 1;
      with({b: 2}) {
        console.log(a); //=> 1
        console.log(b); //=> 2
        var c = 3;
      }
      console.log(c); //=> 3;
    });
    it("コメント通りに動作すること", function() {
      var aa = 1;
      with({b: 2}) {
        expect(aa).toBe(1);
        expect(b).toBe(2);
        var c = 3;
      }
      expect(c).toBe(3);
    });
  });
});
