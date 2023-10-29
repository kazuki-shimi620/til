### 作成コマンド
```shell
php artisan make:factory PostFactory --model=Post
```

```php
factory->define(ProductOrder::class, function (Faker $faker) {  
    // productOrder id order_id jan_code, number complete_bike  
    return [
	    'ec_order_id' => $faker->unique()->regexify('EC[0-9]{6}-[0-9]{9}'),
        'order_id' => function () {  
            return Order::latest('id')->first()->id;  
        },  
        'jan_code' => '305624109',  
        'product_name' => 'GIANT FD直付ﾌﾟﾚｰﾄ TCR WG24G D35 (50/53T)',  
        'number' => '3',  
        'price' => '550',  
        'total' => '550',  
        'category' => '3008',  
        'confirmation' => '0',  
        'complete_bike' => '0',  
    ];  
});
```

laravel8以降であれば
```php
return Order::latest('id')->first()->id;  
```
recycleで済ませることができるため、より記述が簡単になる。

### Faker
```php
$faker->unique->regexify();
```
などで、条件を付与してデータを作成することができる。
デフォルトでFakerを呼び出しているため、基本ランダムな値であるなら、こちらにで記述する。

### オーバーロード
```php
factory(Order::class)->create([
	'number' => 2
])
```
createの中に値を入力することでデータをオーバーロードして作成することができる。

### 複数作成
```php
$users = factory(App\User::class, 'admin', 3)->create();
```

### state()
- factoryに下記のように設定をしておく
```php
$factory
->state(Order::class, '店舗受取' , function (Faker $faker) {  
    return [  
        'payment_method' => '店舗受取',  
    ];  
});
```

- 呼び出す際にstateを呼び出すことで、値を上書きできる。
- メリット
	- 定数は設定値を呼び出すだけでよくなる。
	- 組み合わせで何を変更したのかが明確になる
```php
factory(Order::class)->state($data['order_state'])->create()
```
