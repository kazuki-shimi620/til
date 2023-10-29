```bash
$ find -n /backup/daily
# -n ファイル名を検索
$ find /backup/daily -ctime +30
# ctime changed time(最終変更日) から +30日noファイルを探す
$ find /log/ -ctime +7 -and -ctime -15
# 一週間前から2週間前までのlogを取得しようとしている
$ find /log/ -ctime +180 -and \(-name "*access*" -or "*error*" \)
```