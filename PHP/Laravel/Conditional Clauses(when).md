#laravel #php #eloquent
検索を実施する場合に値があるかどうかをif文でチェックを行い、値がある場合には条件句で検索を絞る場合に下記のように記述することができます。

```php
$query = Report::query();
if(request()->status)  $query()->where('status',request()->status);
$reports = $query->get();
```

Conditional Clauseesのwhenを利用して下記のように変更することもできます。

```php
$reports = Report::when(request()->status,function($query){
  return $query->where('status',request()->status);
})->get();
```

whenの後のrequest()->statusに値がある場合はwhere句が実行されます。
```
kkkk
```
kkkkk