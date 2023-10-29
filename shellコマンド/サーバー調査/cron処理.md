crontab
```bash
#crontab -> crondに実行して欲しいコマンドと実行時刻を渡す
crontab -l
# -l list 一覧を取得
# -e edit 編集(vi)
0 3 * * * /scripts/do_backup.sh
# 深夜の3時に実行
30 2,14 * * * /scripts/do_backup.sh
# 2時30分と14時30分に実行
45 11 * * 1 /scripts/do_backup.sh
# 毎週月曜日に実行
* 21 * * * /scripts/do_backup.sh
# 21時に毎分実行の意味
```
