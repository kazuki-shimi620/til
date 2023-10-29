#laravel #php #eloquent 

モデルが変更されたかチェック

`isDirty()`でモデルに変更があったか確認できます。

```php
use App\User;
$user = App\User::first();
$user->isDirty();        // false

$user->email = "yamada.taro@example.com";
$user->isDirty();        // true
```

特定の属性が変更されたかも確認できます。

```php
$user->isDirty('email');  // true
$user->isDirty('status'); // false
```

<=> isClean()もある