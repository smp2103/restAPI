직접 만들어보는 AJAX CONTROLLER
==========================

사용법
--------------------------
## require.js 로드
<pre>
<code>
<script src="/rconfig.js"></script>
<script src="/require.js"></script>
</code>
</pre>

## 모듈 불러오기
<pre>
<code>
define(['rest'],function(rest){

    const rest = new rest();
    
    // sample callback function

    const cb = function (response) {
        response.then(res => res.json())
                .then(data => console.log(data))
    }
    
    // SET URL
    const url = rest.setUrl(//url)

    // GET
    url.get(cb)
    // POST
    url.post(data,cb)
    // PUT
    url.put(data,cb)
    // DELETE
    url.delete(data,cb)
    // METHOD CHAIN
    url.get(cb).post(data,cb).delete(data,cb)

}])
</code>
</pre>