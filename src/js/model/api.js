const API_MODEL =
{
  contents : [{
    controller : {
      id : '',
      name : "testController",
      memo : "홍오빠의 컨트롤러",
      api : [
        {
          api : {
            id : "1",
            name : "member",
            memo : "멤버 가져오기",
            method : "GET",
            url : "/api/testController/members"
          }
        }
      ]
    }
  }]
}

export default API_MODEL
