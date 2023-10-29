```bash
$ df # Disk free の略
Filesystem     1K-blocks     Used Available Use% Mounted on
/dev/xvda1      30962684 15791968  13598240  54% /
tmpfs             509296        0    509296   0% /dev/shm

$ df -h
# -human-readable
Filesystem      Size  Used Avail Use% Mounted on
/dev/xvda1       30G   16G   13G  54% /
tmpfs           498M     0  498M   0% /dev/shm
```