AWS Security Hub 
- AWS サービスのセキュリティの設定を全体的にチェックしてくれるサービス。
- スコア化して表示してくれる。
- 無料枠が広く料金が安い

AWS CloudTrail 
- 操作の履歴を確認できる
- いつどこで誰がどうしたがわかる

AWS VPC Flow Logs
- 制限の過度に厳しいセキュリティグループルールを診断する  
- インスタンスに到達するトラフィックをモニタリングする  
- ネットワークインターフェイスに出入りするトラフィックの方向を決定する

DNS Logs 

AWS GuradDuty
- CloudTrail VPC Flow Logs DNS Logsをバックグラウンドで自動収集
	- うちは導入できない?
	- VPC Flow Logsの必要性は？
	- 料金は？
- 機械学習により脅威を検出する
- あくまで検出のみ
- EBS内をスキャンしている
- https://dev.classmethod.jp/articles/guardduty-si-strongest-thread-detection/
- コインマイニングの検知などもしてくれる

Amazon Detective
- VPC Flow Logs Cloud Trail Guard Duty Findingsを自動で取り込む
- 内部のGrach DBで関連付けをしてくれる
- 料金は
- 
- 