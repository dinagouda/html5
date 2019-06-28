window.onload = function () {
    //alert("jkh")








    document.getElementById("but").onclick = getValue;

    function getValue() {

        var a = document.getElementById("sub1").value;
        var b = document.getElementById("sub2").value;
        var c = document.getElementById("sub3").value;
        var d = document.getElementById("sub4").value;

        var e = document.getElementById("firstdegree").value;
        var f = document.getElementById("seconddegree").value;
        var g = document.getElementById("thirddegree").value;
        var h = document.getElementById("forthdegree").value;


        var pie = document.getElementById("pie");
        var dou = document.getElementById("dou");
        var line = document.getElementById("line");
        var bsr = document.getElementById("bsr");



        
       



        if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "" || e == "" || f == "" || g == "" || h == "") {
            alert("Please Fill All Required Field");
            return false;
        }


        if (Number(e) + Number(f) + Number(g) + Number(h) != 100) {

            //alert (e+f+g+h);
            alert("values must be equal 100");
            return false;
        } else {





            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            if (pie.checked == true) {

                //alert(a);

                var first = (document.getElementById("firstdegree").value / 100);
                var second = (document.getElementById("seconddegree").value / 100);
                var third = (document.getElementById("thirddegree").value / 100);
                var forth = (document.getElementById("forthdegree").value / 100);

                var firstcol = document.getElementById("firstcol").value;
                var secondcol = document.getElementById("secondcol").value;
                var thirdcol = document.getElementById("thirdcol").value;
                var forthcol = document.getElementById("forthcol").value;

                //alert(firstcol +","+ secondcol +","+thirdcol+","+forthcol)
//alert( document.getElementById("tx1"));
                document.getElementById("tx1").value=a;
                document.getElementById("tx2").value=b;
                document.getElementById("tx3").value=c;
                document.getElementById("tx4").value=d;

                
                 document.getElementById("col1").style.background=firstcol;

                 document.getElementById("col2").style.background=secondcol;
                document.getElementById("col3").style.background=thirdcol;
                 document.getElementById("col4").style.background=forthcol;

                var canvas = document.getElementById("myCanvas");
                var ctx = canvas.getContext("2d");


                ctx.fillStyle = firstcol;
                ctx.beginPath();
                ctx.moveTo(150, 150)
                ctx.arc(150, 150, 100, 0 * Math.PI * 2, first * Math.PI * 2, false);
                ctx.lineTo(150, 150);
                ctx.closePath();
                ctx.fill();

                ctx.fillStyle = secondcol;
                ctx.beginPath();
                ctx.moveTo(150, 150)
                ctx.arc(150, 150, 100, first * Math.PI * 2, first * Math.PI * 2 + second * Math.PI * 2, false);
                ctx.lineTo(150, 150);
                ctx.closePath();
                ctx.fill();

                ctx.fillStyle = thirdcol;
                ctx.beginPath();
                ctx.moveTo(150, 150)
                ctx.arc(150, 150, 100, first * Math.PI * 2 + second * Math.PI * 2, first * Math.PI * 2 + second * Math.PI * 2 + third * Math.PI * 2, false);
                ctx.lineTo(150, 150);
                ctx.closePath();
                ctx.fill();


                ctx.fillStyle = forthcol;
                ctx.beginPath();
                ctx.moveTo(150, 150)
                ctx.arc(150, 150, 100, first * Math.PI * 2 + second * Math.PI * 2 + third * Math.PI * 2, first * Math.PI * 2 + second * Math.PI * 2 + third * Math.PI * 2 + forth * Math.PI * 2, false);
                ctx.lineTo(150, 150);
                ctx.closePath();
                ctx.fill();

            }







            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            if (dou.checked == true) {

                var canvas = document.getElementById("myCanvas");
                var ctx = canvas.getContext("2d");


                ctx.fillStyle = firstcol;
                ctx.beginPath();
                ctx.moveTo(400, 150)
                ctx.arc(400, 150, 100, 0 * Math.PI * 2, first * Math.PI * 2, false);
                ctx.lineTo(400, 150);
                ctx.closePath();
                ctx.fill();

                ctx.fillStyle = secondcol;
                ctx.beginPath();
                ctx.moveTo(400, 150)
                ctx.arc(400, 150, 100, first * Math.PI * 2, first * Math.PI * 2 + second * Math.PI * 2, false);
                ctx.lineTo(400, 150);
                ctx.closePath();
                ctx.fill();

                ctx.fillStyle = thirdcol;
                ctx.beginPath();
                ctx.moveTo(400, 150)
                ctx.arc(400, 150, 100, first * Math.PI * 2 + second * Math.PI * 2, first * Math.PI * 2 + second * Math.PI * 2 + third * Math.PI * 2, false);
                ctx.lineTo(400, 150);
                ctx.closePath();
                ctx.fill();


                ctx.fillStyle = forthcol;
                ctx.beginPath();
                ctx.moveTo(400, 150)
                ctx.arc(400, 150, 100, first * Math.PI * 2 + second * Math.PI * 2 + third * Math.PI * 2, first * Math.PI * 2 + second * Math.PI * 2 + third * Math.PI * 2 + forth * Math.PI * 2, false);
                ctx.lineTo(400, 150);
                ctx.closePath();
                ctx.fill();



                ctx.fillStyle = "#FFFFFF";
                ctx.beginPath();
                ctx.moveTo(400, 150)
                ctx.arc(400, 150, 50, 0 * Math.PI * 2, first * Math.PI * 2 + second * Math.PI * 2 + third * Math.PI * 2 + forth * Math.PI * 2, false);
                ctx.lineTo(400, 150);
                ctx.closePath();
                ctx.fill();


            }



        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        if (line.checked == true) {
            var first = (document.getElementById("firstdegree").value);
            var second = (document.getElementById("seconddegree").value);
            var third = (document.getElementById("thirddegree").value);
            var forth = (document.getElementById("forthdegree").value);


            var sub1 = document.getElementById("sub1").value;
            var sub2 = document.getElementById("sub2").value;
            var sub3 = document.getElementById("sub3").value;
            var sub4 = document.getElementById("sub4").value;

            document.getElementById("tex1").innerHTML=sub1;
            document.getElementById("tex2").innerHTML=sub2;
            document.getElementById("tex3").innerHTML=sub3;
            document.getElementById("tex4").innerHTML=sub4;



            document.getElementById("line_1").setAttribute("style", "stroke:orange ;stroke-width:2");
            document.getElementById("line_2").setAttribute("style", "stroke:orange ;stroke-width:2");
            document.getElementById("line_3").setAttribute("style", "stroke:orange ;stroke-width:2");



            

            var x1 = 100;
            var y1 = first * 10;

            var x2 = 200;
            var y2 = second * 10;

            var x3 = 350;
            var y3 = third * 10;

            var x4 = 600;
            var y4 = forth * 10;

            var y11 =600-y1;
            var y22 = 600-y2;
            var y33 =600-y3;
            var y44 =600-y4;

    //alert(.25*Math.PI*2);



    // var points=polyline.getAttribute('points');
    // //alert(points);
    // polyline.setAttribute('points', 'x1,y1 x2,y2 x3,y3 x4,y4 x5,y5 ');

    // polyline.setAttribute('points',+"'" +x1+','+y1 +' '+ x2+','+y2 +' '+ x3+',' +y3 +' '+ x4+','+y4 +' '+ x5+','+y5+"'");
    
    var polyline1 = document.getElementById('line_1');
            var polyline2 = document.getElementById('line_2');
            var polyline3 = document.getElementById('line_3');

            polyline1.setAttribute('x1', x1);
            polyline1.setAttribute('y1', y11);
            polyline1.setAttribute('x2', x2);
            polyline1.setAttribute('y2', y22);
0

            polyline2.setAttribute('x1', x2);
            polyline2.setAttribute('y1', y22);
            polyline2.setAttribute('x2', x3);
            polyline2.setAttribute('y2', y33);

            polyline3.setAttribute('x1', x3);
            polyline3.setAttribute('y1', y33);
            polyline3.setAttribute('x2', x4);
            polyline3.setAttribute('y2', y44);



        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        if (bsr.checked == true) {

            var first = (document.getElementById("firstdegree").value);
            var second = (document.getElementById("seconddegree").value);
            var third = (document.getElementById("thirddegree").value);
            var forth = (document.getElementById("forthdegree").value);

            var firstcol = document.getElementById("firstcol").value;
            var secondcol = document.getElementById("secondcol").value;
            var thirdcol = document.getElementById("thirdcol").value;
            var forthcol = document.getElementById("forthcol").value;

            var sub1 = document.getElementById("sub1").value;
            var sub2 = document.getElementById("sub2").value;
            var sub3 = document.getElementById("sub3").value;
            var sub4 = document.getElementById("sub4").value;

            document.getElementById("text1").innerHTML=sub1;
            document.getElementById("text2").innerHTML=sub2;
            document.getElementById("text3").innerHTML=sub3;
            document.getElementById("text4").innerHTML=sub4;


            var x = first * 10;
            var y = second * 10;
            var m = third * 10;
            var z = forth * 10;


            var f1 = 550 - x;
            var f2 = 550 - y;
            var f3 = 550 - m;
            var f4 = 550 - z;

            document.getElementById("rect_1").setAttribute("height", x);
            document.getElementById("rect_2").setAttribute("height", y);
            document.getElementById("rect_3").setAttribute("height", m);
            document.getElementById("rect_4").setAttribute("height", z);

            document.getElementById("rect_1").setAttribute("y", f1);
            document.getElementById("rect_2").setAttribute("y", f2);
            document.getElementById("rect_3").setAttribute("y", f3);
            document.getElementById("rect_4").setAttribute("y", f4);


            document.getElementById("rect_1").setAttribute("style", "fill:" + firstcol);
            document.getElementById("rect_2").setAttribute("style", "fill:" + secondcol);
            document.getElementById("rect_3").setAttribute("style", "fill:" + thirdcol);
            document.getElementById("rect_4").setAttribute("style", "fill:" + forthcol);





        }











    }











}