#laravel #php #eloquent 
#### 変更のプロパティを取得

`getChanges`でDB更新後に変更分を取得できます。

```php
$user->save();

$user->getChanges();
=> [
     "email" => "yamada.taro@example.net",
     "updated_at" => "2021-05-19 09:58:25",
   ]
```

`wasChanged`でDB更新後に変更のあったプロパティを確認できます。(boolean)

```php
$user->save();

$user->wasChanged('email');      // true

$user->wasChanged('status');     // false

$user->wasChanged();             // true
```
