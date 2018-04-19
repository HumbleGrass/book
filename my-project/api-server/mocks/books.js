/**
 * 图书数据
 *
 * @url /book-api
 * @url /book-api?id=10
 */
let books={ // 返回mock的用户信息，但用户id固定
    code: 0,
    result: [
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t19054/355/1253612100/145321/f1b3a925/5ac23694Nfc9e2ce3.jpg",
        "bookName": "Vue.js-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 1,
      },
      {
        "bookCover":"https://img12.360buyimg.com/n7/jfs/t5713/237/2034261320/248346/e364dcaa/592bf164N7a4187c3.jpg",
        "bookName": "JaveScripg-高级程序设计",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 2,
      },
      {
        "bookCover":"https://img13.360buyimg.com/n1/s200x200_jfs/t12325/69/355910088/75685/cef83bb5/5a0900fcN8f86bb3d.jpg",
        "bookName": "JaveScripg-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 3,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t2851/314/3804921704/166163/1ad2b626/57997c24Nf9850de8.jpg",
        "bookName": "Css-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 4,
      },
      {
        "bookCover":"https://img14.360buyimg.com/n1/s200x200_jfs/t217/279/1038619438/546651/c0b759aa/53f560e4Na8646b80.jpg",
        "bookName": "Html-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 5,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t19054/355/1253612100/145321/f1b3a925/5ac23694Nfc9e2ce3.jpg",
        "bookName": "Vue.js-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 6,
      },
      {
        "bookCover":"https://img12.360buyimg.com/n7/jfs/t5713/237/2034261320/248346/e364dcaa/592bf164N7a4187c3.jpg",
        "bookName": "JaveScripg-高级程序设计",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 7,
      },
      {
        "bookCover":"https://img13.360buyimg.com/n1/s200x200_jfs/t12325/69/355910088/75685/cef83bb5/5a0900fcN8f86bb3d.jpg",
        "bookName": "JaveScripg-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 8,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t2851/314/3804921704/166163/1ad2b626/57997c24Nf9850de8.jpg",
        "bookName": "Css-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 9,
      },
      {
        "bookCover":"https://img14.360buyimg.com/n1/s200x200_jfs/t217/279/1038619438/546651/c0b759aa/53f560e4Na8646b80.jpg",
        "bookName": "Html-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 10,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t19054/355/1253612100/145321/f1b3a925/5ac23694Nfc9e2ce3.jpg",
        "bookName": "Vue.js-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 11,
      },
      {
        "bookCover":"https://img12.360buyimg.com/n7/jfs/t5713/237/2034261320/248346/e364dcaa/592bf164N7a4187c3.jpg",
        "bookName": "JaveScripg-高级程序设计",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 12,
      },
      {
        "bookCover":"https://img13.360buyimg.com/n1/s200x200_jfs/t12325/69/355910088/75685/cef83bb5/5a0900fcN8f86bb3d.jpg",
        "bookName": "JaveScripg-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 13,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t2851/314/3804921704/166163/1ad2b626/57997c24Nf9850de8.jpg",
        "bookName": "Css-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 14,
      },
      {
        "bookCover":"https://img14.360buyimg.com/n1/s200x200_jfs/t217/279/1038619438/546651/c0b759aa/53f560e4Na8646b80.jpg",
        "bookName": "Html-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 15,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t19054/355/1253612100/145321/f1b3a925/5ac23694Nfc9e2ce3.jpg",
        "bookName": "Vue.js-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 16,
      },
      {
        "bookCover":"https://img12.360buyimg.com/n7/jfs/t5713/237/2034261320/248346/e364dcaa/592bf164N7a4187c3.jpg",
        "bookName": "JaveScripg-高级程序设计",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 17,
      },
      {
        "bookCover":"https://img13.360buyimg.com/n1/s200x200_jfs/t12325/69/355910088/75685/cef83bb5/5a0900fcN8f86bb3d.jpg",
        "bookName": "JaveScripg-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 18,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t2851/314/3804921704/166163/1ad2b626/57997c24Nf9850de8.jpg",
        "bookName": "Css-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 19,
      },
      {
        "bookCover":"https://img14.360buyimg.com/n1/s200x200_jfs/t217/279/1038619438/546651/c0b759aa/53f560e4Na8646b80.jpg",
        "bookName": "Html-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 20,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t19054/355/1253612100/145321/f1b3a925/5ac23694Nfc9e2ce3.jpg",
        "bookName": "Vue.js-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 21,
      },
      {
        "bookCover":"https://img12.360buyimg.com/n7/jfs/t5713/237/2034261320/248346/e364dcaa/592bf164N7a4187c3.jpg",
        "bookName": "JaveScripg-高级程序设计",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 22,
      },
      {
        "bookCover":"https://img13.360buyimg.com/n1/s200x200_jfs/t12325/69/355910088/75685/cef83bb5/5a0900fcN8f86bb3d.jpg",
        "bookName": "JaveScripg-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 23,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t2851/314/3804921704/166163/1ad2b626/57997c24Nf9850de8.jpg",
        "bookName": "Css-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 24,
      },
      {
        "bookCover":"https://img14.360buyimg.com/n1/s200x200_jfs/t217/279/1038619438/546651/c0b759aa/53f560e4Na8646b80.jpg",
        "bookName": "Html-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 25,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t19054/355/1253612100/145321/f1b3a925/5ac23694Nfc9e2ce3.jpg",
        "bookName": "Vue.js-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 26,
      },
      {
        "bookCover":"https://img12.360buyimg.com/n7/jfs/t5713/237/2034261320/248346/e364dcaa/592bf164N7a4187c3.jpg",
        "bookName": "JaveScripg-高级程序设计",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 27,
      },
      {
        "bookCover":"https://img13.360buyimg.com/n1/s200x200_jfs/t12325/69/355910088/75685/cef83bb5/5a0900fcN8f86bb3d.jpg",
        "bookName": "JaveScripg-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 28,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t2851/314/3804921704/166163/1ad2b626/57997c24Nf9850de8.jpg",
        "bookName": "Css-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 29,
      },
      {
        "bookCover":"https://img14.360buyimg.com/n1/s200x200_jfs/t217/279/1038619438/546651/c0b759aa/53f560e4Na8646b80.jpg",
        "bookName": "Html-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 30,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t19054/355/1253612100/145321/f1b3a925/5ac23694Nfc9e2ce3.jpg",
        "bookName": "Vue.js-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 31,
      },
      {
        "bookCover":"https://img12.360buyimg.com/n7/jfs/t5713/237/2034261320/248346/e364dcaa/592bf164N7a4187c3.jpg",
        "bookName": "JaveScripg-高级程序设计",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 32,
      },
      {
        "bookCover":"https://img13.360buyimg.com/n1/s200x200_jfs/t12325/69/355910088/75685/cef83bb5/5a0900fcN8f86bb3d.jpg",
        "bookName": "JaveScripg-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 33,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t2851/314/3804921704/166163/1ad2b626/57997c24Nf9850de8.jpg",
        "bookName": "Css-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 34,
      },
      {
        "bookCover":"https://img14.360buyimg.com/n1/s200x200_jfs/t217/279/1038619438/546651/c0b759aa/53f560e4Na8646b80.jpg",
        "bookName": "Html-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 35,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t19054/355/1253612100/145321/f1b3a925/5ac23694Nfc9e2ce3.jpg",
        "bookName": "Vue.js-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 36,
      },
      {
        "bookCover":"https://img12.360buyimg.com/n7/jfs/t5713/237/2034261320/248346/e364dcaa/592bf164N7a4187c3.jpg",
        "bookName": "JaveScripg-高级程序设计",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 37,
      },
      {
        "bookCover":"https://img13.360buyimg.com/n1/s200x200_jfs/t12325/69/355910088/75685/cef83bb5/5a0900fcN8f86bb3d.jpg",
        "bookName": "JaveScripg-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 38,
      },
      {
        "bookCover":"https://img10.360buyimg.com/n1/s200x200_jfs/t2851/314/3804921704/166163/1ad2b626/57997c24Nf9850de8.jpg",
        "bookName": "Css-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 39,
      },
      {
        "bookCover":"https://img14.360buyimg.com/n1/s200x200_jfs/t217/279/1038619438/546651/c0b759aa/53f560e4Na8646b80.jpg",
        "bookName": "Html-权威指南",
        "bookInfo": "@cparagraph(3,5)",
        "bookPrice|50-100.1-2":50,
        "bookId": 40,
      },
    ]
};
let pageSize=5;
module.exports = function (req) {
    // express 的 req 对象
    switch (req.method) {
      case "GET":
        if(req.query.id){
            return {result:books.result.filter(item=>item.bookId===parseInt(req.query.id))[0]}
        }
        if(req.query.offset){
            let offset=parseInt(req.query.offset);
              return {result:books.result.slice(offset,offset+pageSize)}
        } 
        return books;
        break;
      case "POST":
        req.on('data',chunk=>{
          let obj=JSON.parse(chunk.toString());
              obj.bookId=books.result.length+1;
              obj.bookCover='https://img14.360buyimg.com/n1/s200x200_jfs/t217/279/1038619438/546651/c0b759aa/53f560e4Na8646b80.jpg';
          let ispush=[];
          for(let item of Object.keys(obj)){
              ispush.push(obj[item])
          }
          if(ispush.every(item=>item)){
            books.result.push(obj)
          }
        })
        return {result:'添加成功'};
        break;
      case "PUT":
          req.on('data',chunk=>{
            console.log(JSON.parse(chunk.toString()));
            books.result.forEach((item,index)=>{
                  if(item.bookId===parseInt(req.query.id)){
                    books.result.splice(index,1,JSON.parse(chunk.toString()))
                  }
            });            
          })
          return books;
        break;
      case "DELETE":
          books.result=books.result.filter(item=>item.bookId!==parseInt(req.query.id));
          return books;
        break;
      default:
        break;
    }
  };