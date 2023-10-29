#laravel #php #helper関数
`blank`関数は指定値が"blank"であるかどうかを返します。

```php
blank('');
blank('   ');
blank(null);
blank(collect());

// true

blank(0);
blank(true);
blank(false);

// false
```

`blank`の逆の動作は、[`filled`](https://readouble.com/laravel/5.8/ja/helpers.html#method-filled)メソッドです。