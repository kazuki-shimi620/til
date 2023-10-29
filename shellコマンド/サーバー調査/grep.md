#linux #shell 

```bash
$ grep -r -E "((400|404|500)?(GET|POST|PUT))" accesslog-0302.log.
# -r ディレクトリの中まで検索
# -E 正規表現を用いての検索
$ grep -r -i "((400|404|500)?(GET|POST|PUT))" accesslog-0302.log
# -i　大文字小文字を区別しない (ignore case)
```

パイプラインによる
```bash
$ grep "GET" access.log | grep -v "404" | less
# -v 指定した文字列を含まない行を出力
```

cut コマンド
```bash
$ cut -d " " -f 7
# -d delimiter(区切り文字) 後の文字で区切りを入れる
# -f fields (取り出す位置) 何番目のものかを指定する
$ cut -d "[" -f 2 | cut -d "]" -f 1
# 日付を取り出すことができる。
$ cut -d "," -f 1,3,2,6
# 1,3,2,6行目を出力
$ cut -d "," -f 1-5
# 1から5行目を出力
$ cut -f 1,3 
# タブをデミリタにする
```

sort コマンド
```bash
$ sort -r
# 入力された内容をアルファベット順に取得　
# -r reserve 降順にソート
$ sort -n
# -n number 数値の大小を比較して取得
```

uniq コマンド
```bash
$ uniq -c
# -c count 出現して欲しい回数を取得する。
# sort と一緒に使用する その際-nはいらない -> 右寄せにしているから
```

tail headコマンド
```bash
$ head 
# head 最初の10行
$ tail 
# tail 最後の10行
$ head -n 20
# -n で最初の20行を取り出す
$ tail -n +6
# +6で6行目以降を出力
```

実践
```bash
$ cat /var/log/httpd/accsess.log 
	| grep -v "GET" 
		| sort -t "," -k -3 -n
			| cut -d " " -f 7
				| tail -n 20 > ./item-soted.csv
# > 削除->記述の意味
# >> 追記
```