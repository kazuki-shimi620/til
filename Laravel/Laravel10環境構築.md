# Laravel10のAPI環境構築

## setup

:::info

- MacOS, WindowsどちらもDockerDeskTopを前提とする
:::

### MacOSの場合

```shell
curl -s "https://laravel.build/example-app" | bash
```

```shell
cd example-app

./vendor/bin/sail up
```

:::danger

- Windows Subsystem for Linux 2（WSL2）がインストールされ、有効になっていることを確認する必要があります。
- WSLを使用すると、Linuxバイナリ実行可能ファイルをWindows 10でネイティブに実行できます。
- WSL2をインストールして有効にする方法については、Microsoftの開発者環境ドキュメントを参照してください
:::

### Windows

```shell
curl -s "https://laravel.build/example-app" | bash
```

```shell
cd example-app

./vendor/bin/sail up
```

### Sail起動後
[Laravel10時代のプロジェクトの始め方](https://zenn.dev/imah/articles/5d761f8f8c26fe)

## 導入ライブラリ

- Laravel Swagger
- Breeze
- laravel-telescope
