const API_MODEL =
{
  contents : [
    {
      controller : {
        id : '',
        show: true,
        controllerName : "testController",
        controllerMemo : "웅이가 만든 컨트롤러",
        api : [
          {
            api : {
              id : "1",
              apiName : "member",
              apiMemo : "멤버 가져오기",
              apiMethod : "GET",
              url : "/api/testController/members"
            }
          },
          {
            api : {
              id : "2",
              apiName : "member",
              apiMemo : "멤버 등록하기",
              apiMethod : "POST",
              url : "/api/testController/members"
            }
          },
          {
            api : {
              id : "3",
              apiName : "member",
              apiMemo : "멤버 수정하기",
              apiMethod : "PUT",
              url : "/api/testController/members/{memberId}"
            }
          },
          {
            api : {
              id : "4",
              apiName : "member",
              apiMemo : "멤버 삭제하기",
              apiMethod : "DELETE",
              url : "/api/testController/members/{memberId}"
            }
          },
          {
            api : {
              id : "5",
              apiName : "member",
              apiMemo : "멤버 상세보기",
              apiMethod : "GET",
              url : "/api/testController/members/{memberId}"
            }
          },
          {
            api : {
              id : "5",
              apiName : "member",
              apiMemo : "멤버 수정하기",
              apiMethod : "PATCH",
              url : "/api/testController/members/{memberId}"
            }
          }
        ]
      }
    },
    {
      controller : {
        id : '',
        show: false,
        controllerName : "JongHyoController",
        controllerMemo : "종효가 만든 컨트롤러",
        api : [
          {
            api : {
              id : "1",
              apiName : "member",
              apiMemo : "멤버 가져오기",
              apiMethod : "GET",
              url : "/api/testController/members"
            }
          },
          {
            api : {
              id : "2",
              apiName : "member",
              apiMemo : "멤버 등록하기",
              apiMethod : "POST",
              url : "/api/testController/members"
            }
          },
          {
            api : {
              id : "3",
              apiName : "member",
              apiMemo : "멤버 수정하기",
              apiMethod : "PUT",
              url : "/api/testController/members/{memberId}"
            }
          },
          {
            api : {
              id : "4",
              apiName : "member",
              apiMemo : "멤버 삭제하기",
              apiMethod : "DELETE",
              url : "/api/testController/members/{memberId}"
            }
          },
          {
            api : {
              id : "5",
              apiName : "member",
              apiMemo : "멤버 상세보기",
              apiMethod : "GET",
              url : "/api/testController/members/{memberId}"
            }
          }
        ]
      }
    },
  ]
}
export default API_MODEL
