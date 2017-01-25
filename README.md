
[TOC]

#微信小程序猫眼电影demo

##一、接口
[http://www.jianshu.com/p/9855610eb1d4](http://www.jianshu.com/p/9855610eb1d4 "http://www.jianshu.com/p/9855610eb1d4")

###1.1 查询出首页电影列表        

```
http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000
request :
type=hot 类型
offset : 数据开始位置
limit ：偏移量
```

###1.2 查出电影详情(包含评论)

```
http://m.maoyan.com/movie/xxxx.json
request:
这里直接在将xxxx换成movieid 例子 246363.json
```

###1.3 加载更多评论

```
http://m.maoyan.com/comments.json?movieid=246363&limit=5&offset=5
request
movieid : 电影id
limit ： 同上
offset ：同上
```

###1.4 查出影院
```
http://m.maoyan.com/cinemas.json
猫眼的服务器会根据你的ip段加载出你本地的影院
```

###1.5 查询出影院详情
```
http://m.maoyan.com/showtime/wrap.json?cinemaid=11533&movieid=
request
cinemaid : 影院id
movieid : 电影id
```

###1.6选座
```
http://m.maoyan.com/show/seats?showId=76304&showDate=2015-06-05
```