#laravel #php #eloquent 
## 確認環境

Laravel 6.x

## [](https://qiita.com/elephant_dev/items/374e4229bbee08914957#1-%E5%85%83%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E5%8F%96%E5%BE%97)1. 元データの取得

eloquentオブジェクトのデータを変更した後に、`getOriginal()`で元のデータを取得できます。

```
use App\User;
$user = App\User::first();

$user->email;                   // nakamura.hanako@example.com

$user->name = "yamada.taro@example.com";
$user->getOriginal('email');    // nakamura.hanako@example.com

$user->name;                    // yamada.taro@example.com
```


## [](https://qiita.com/elephant_dev/items/374e4229bbee08914957#4-%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0-deleted_at)4. カスタム `deleted_at`

デフォルトで、ソフトディレートは `deleted_at`カラムが使用されます。これは、`DELETED_AT`プロパティで変更ができます。

```
use Illuminate\Database\Eloquent\SoftDeletes;
class User extends Model
{
    use SoftDeletes;

     * The name of the "deleted at" column.
     *
     * @var string
     */
    const DELETED_AT = 'is_deleted';
}
```

またはアクセサでも変更できます。

```
use Illuminate\Database\Eloquent\SoftDeletes;
class User extends Model
{
    use SoftDeletes;

    public function getDeletedAtColumn()
    {
        return 'is_deleted';
    }
}
```

## [](https://qiita.com/elephant_dev/items/374e4229bbee08914957#5-%E9%96%A2%E9%80%A3%E3%81%AE%E3%81%82%E3%82%8B%E3%83%A2%E3%83%87%E3%83%AB%E3%82%82%E5%90%8C%E6%99%82%E3%81%AB%E6%9B%B4%E6%96%B0)5. 関連のあるモデルも同時に更新

`push()`メソッドで変更のあるモデルと、その関連するモデルを同時に更新できます。

```
class User extends Model
{
    public function user_profile()
    {
        return $this->hasOne('App\UserProfile');
    }
}

use App\User;
$user = User::first();
$user->email = 'test30@exmaple.co.jp';
$user->user_profile->nickname = 'bob';

$user->push(); // ここで userとuser_profileのレコードがDBに反映されます。
```

## [](https://qiita.com/elephant_dev/items/374e4229bbee08914957#6-%E6%9B%B4%E6%96%B0%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E5%8F%96%E5%BE%97)6. 更新データを取得

`fresh()`を使うとDBから更新データを取得できます。

```
use App\User;
$user = User::first();
$user->email;                    // test30@exmaple.co.jp

## ここでDBのレコードを更新 e.g) emailを"test10@example.co.jp"に変更

$updatedUser = $user->fresh();
$updatedUser->email;             // test10@exmaple.co.jp

$user->email;                    // test30@exmaple.co.jp
```

## [](https://qiita.com/elephant_dev/items/374e4229bbee08914957#7-%E6%9B%B4%E6%96%B0%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E6%97%A2%E5%AD%98%E3%81%AE%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AB%E5%8F%8D%E6%98%A0)7. 更新データを既存のモデルに反映

`refresh()`を使うとDBから更新データを取得し、既存のモデルに反映します。

```
use App\User;
$user = User::first();
$user->email;                    // test10@exmaple.co.jp

## ここでDBのレコードを更新 e.g) emailを"test50@example.co.jp"に変更

$user->refresh();
$user->email;                    // test50@exmaple.co.jp

```

## [](https://qiita.com/elephant_dev/items/374e4229bbee08914957#8-%E5%90%8C%E4%B8%80%E3%83%A2%E3%83%87%E3%83%AB%E3%81%8B%E7%A2%BA%E8%AA%8D)8. 同一モデルか確認

`is()`を使うと同一モデルか確認できます。

下記全てが同一なら、同一モデルとして判断されます。  
・ID  
・参照しているテーブル  
・DB接続設定

```
use App\User;
$user = User::find(1);
$sameUser = User::find(1);
$diffUser = User::find(2);

$user->is($sameUser);       // true
$user->is($diffUser);       // false
```

## [](https://qiita.com/elephant_dev/items/374e4229bbee08914957#9-%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC)9. モデルのコピー

`replicate()` を使ってモデルをコピーできます。

```
use App\User;
$user = User::find(1);
App\User {
    email: "yamada.taro@example.net",
    status: "0",
}
$user->id;    // 1

$newUser = $user->replicate();
App\User {
    email: "yamada.taro@example.net",
    status: "0",
}
$newUser->email = "nakamura.taro@exmaple.co.jp";
$newUser->save();

$newUser->id;     // 52
```

## [](https://qiita.com/elephant_dev/items/374e4229bbee08914957#10-find-%E3%81%A7%E7%89%B9%E5%AE%9A%E3%81%AE%E5%B1%9E%E6%80%A7%E3%82%92%E5%8F%96%E5%BE%97)10. `find()` で特定の属性を取得

`find()` or `findOrFail()` で特定の属性のみ取得できます。

```
use App\User;
$user = User::find(1, ['email', 'status']);
# App\User {
#     email: "test30@exmaple.co.jp",
#     status: "0",
# }

$user = User::findOrFail(1, ['email', 'status']);
# App\User {
#     email: "test30@exmaple.co.jp",
#     status: "0",
# }
```

[](https://b.hatena.ne.jp/entry/s/qiita.com/elephant_dev/items/374e4229bbee08914957 "はてなブックマーク")