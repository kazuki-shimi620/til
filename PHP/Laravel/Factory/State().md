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
