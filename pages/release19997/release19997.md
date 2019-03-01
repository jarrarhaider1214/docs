# Getting Started
this is getting started 


| Asad Faizi <asad@platalytics.com>             | Sun Sep 09 2018 | 20:31:53 | Fwd: CV for fresh software engineer (PUCIT) \|\| CGPA 3.14 |
| --------------------------------------------- | --------------- | -------- | ---------------------------------------------------------- |
| Asad Faizi <asad@platalytics.com>             | Wed Sep 12 2018 | 22:28:17 | Fwd: Applying As A Software Engineer                       |
| Muhammad Fakhar <muhammadfakhar004@gmail.com> | Thu Sep 13 2018 | 14:36:51 | Fresh Software Engineer Post                               |
| Asad Faizi <asad@platalytics.com>             | Tue Sep 18 2018 | 13:09:43 | Fwd: CV \| Fresh Graduate \| PUCIT                         |
| Fatima Akram <fatimauet2014@gmail.com>        | Fri Sep 28 2018 | 21:28:03 | SQA                                                        |
| Sadia Amin <sadiaamin24@gmail.com>            | Mon Oct 01 2018 | 20:31:12 | SQA recruitment                                            |
| Asad Faizi <asad@platalytics.com>             | Mon Oct 08 2018 | 1:07:13  | Fwd: Applying As A Software Engineer                       |
| Osama naeem <osamanaeem1995@gmail.com>        | Mon Oct 15 2018 | 23:43:56 | SQA Engineer                                               |




```sh
Options:
  --local, -l  Copy docsify files to local. To explicitly set --local to false
               you may use --no-local.                [boolean] [default: false]
```

## Heading 2


```go
func (kd *KubeDeployer) createAddons(c pb.ClusterMasterClient) {

	utils.Info.Println("deploying addons")

	kube_addon_unit, _ := readFile(kd.UnitPath + "kube-addon.service")
	utils.Info.Println(kube_addon_unit)

	// write unit file
	files_pb := []*pb.File{
		{Name: "kube-addon.service", Path: kd.SystemdPath, Data: kube_addon_unit},
	}
	r, err := c.CreateFile(context.Background(), &pb.CreateFileRequest{Files: files_pb})
	if err != nil {
		utils.Info.Println(err)
	}
	utils.Info.Printf("%+v\n", r)

	//
	// execute the unit
	commands := []*pb.Command{
		{Command: "systemctl", Args: []string{"daemon-reload"}},
		{Command: "systemctl", Args: []string{"enable", "kube-addon"}},
		{Command: "systemctl", Args: []string{"start", "kube-addon"}},
	}
	r, err = c.ExecuteCommand(context.Background(), &pb.Commands{CommandsList: commands})
	if err != nil {
		utils.Info.Println(err)
	}
	utils.Info.Printf("%+v\n", r)
}

```



## Heading 3
this is a image

![](imgs/demo1.png)

