#laravel #php
```bash
$ php artisan tinker
>>> $user = App\User::where('email','john@example.com')->first();
=> App\User {#2963
     id: 2,
     name: "john doe",
     email: "john@example.com",
     email_verified_at: null,
     created_at: "2019-08-31 00:32:35",
     updated_at: "2019-08-31 00:32:35",
   }
>>> $user->password = Hash::make('123456789');
=> "$2y$10$.BCHxBV3rD3pHMdbMa.W.O08JNFWGLwDqehdZKE5kh8PNSADSuSha"
>>> $user->save();
=> true
```