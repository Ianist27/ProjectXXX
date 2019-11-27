CREATE TABLE [dbo].[Employeemaster]
(
  [UserId][int]IDENTITY( 1,1) NOT NULL,
 [UserName][varchar](50) NOT NULL,
 [LoginName][varchar](50) NULL,
 [PassWORDrd][varchar](50) NOT NULL,
 [Email][varchar](50) NULL,
 [ContactNo][varchar](15) NULL,
 [Address][varchar](50) NULL,
 [IsApproved][int] NULL,
 [Status][int] NULL,
 [TotalCnt][int] NULL,

 PRIMARY KEY CLUSTERED
(
 [UserId] ASC
)
WITH(PAD_INDEX =OFF, STATISTICS_NORECOMPUTE=OFF, IGNORE_DUP_KEY=OFF, ALLOW_ROW_LOCKS=ON, ALLOW_PAGE_LOCKS=ON) ON [PRIMARY]
)
