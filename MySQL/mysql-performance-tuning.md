# MySQLパフォーマンスチューニングについての学習

## my.cnfの見直し

### MySQL Tunerの使用

:::info

- mysqlの設定を見直してくれる外部ツール
- [MySQL-TunerのGitHubページ](https://github.com/major/MySQLTuner-perl)
- 実際に上記のツールどうりに設定しても動かない場合もあるため、設定値の調査とテスト環境でのテストが必須となる。
:::

### 変更候補設定値

#### thread_cache_size(default at 4)

- MySQLはクライアントの接続ごとにスレッドを作成している。
- このスレッドをキャッシュすることで別クライアントからの接続時の負荷を軽減する
- 値はスレッドの数

#### query_cache(default at none)

- クエリキャッシュの設定を変更する
- ブログなどのクエリキャッシュヒット率の高いものを設定するべき
- クエリキャッシュのヒット率を計測することも大切

```shell
[mysqld]

# クエリキャッシュ最大サイズ
query_cache_limit=16M

# クエリキャッシュで使用するメモリサイズ
query_cache_size=512M

# クエリキャッシュのタイプ(0:off, 1:ON SELECT SQL_NO_CACHE以外, 2:DEMAND SELECT SQL_CACHEのみ)
query_cache_type=1

```

## index張り替え


## 保守

### slow-query-logs
