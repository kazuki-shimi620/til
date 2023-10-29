#linux #shell 

```bash
$ top
top - 10:55:47 up 6 days, 45 min,  1 user,  load average: 0.00, 0.00, 0.00
Tasks:  75 total,   1 running,  74 sleeping,   0 stopped,   0 zombie
Cpu(s):  0.0%us,  0.0%sy,  0.0%ni,100.0%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
Mem:   1018596k total,   660396k used,   358200k free,    62932k buffers
Swap:        0k total,        0k used,        0k free,   309180k cached

  PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND
  702 root      20   0  779m  35m 7072 S  0.7  3.5  34:47.21 amazon-cloudwat
    1 root      20   0 19232 1128  836 S  0.0  0.1   0:02.34 init
    2 root      20   0     0    0    0 S  0.0  0.0   0:00.00 kthreadd

# load average -> cpuに処理待ちの仕事量 コア数によって意味合いが変わってくる
# シングル-> 1 デュアル ->2 ・・・

# %CPU TIME+ cpuの占有割合と実際の稼働時間 TIMEが多いとcpuの使用時間が長いことになる

# c => Command
top - 11:04:47 up 6 days, 54 min,  1 user,  load average: 0.00, 0.00, 0.00
Tasks:  75 total,   1 running,  74 sleeping,   0 stopped,   0 zombie
Cpu(s):  0.0%us,  0.0%sy,  0.0%ni,100.0%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
Mem:   1018596k total,   660468k used,   358128k free,    63008k buffers
Swap:        0k total,        0k used,        0k free,   309328k cached

  PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND
  702 root      20   0  779m  34m 7080 S  0.3  3.5  34:49.43 /opt/aws/amazon-cloudwatch-
    1 root      20   0 19232 1128  836 S  0.0  0.1   0:02.34 /sbin/init
    2 root      20   0     0    0    0 S  0.0  0.0   0:00.00 [kthreadd]
    3 root      RT   0     0    0    0 S  0.0  0.0   0:00.00 [migration/0]

# sudo kill ID -> プロセスを終了させる 複数IDを選択可能

Swap:        0k total,        0k used,        0k free,   309328k cached
# スワップアウト -> メモリーが不足してくると、作業場所を確保するため、最近使っていないデータをハードディスクにどかすこと 対義語としてスワップインがある
# スワップはOSが自動で行うためメモリの空き容量を気にしなくすむが、スワップが頻繁に発生するとI/Oの待ち時間が長くなってしまう。

```




