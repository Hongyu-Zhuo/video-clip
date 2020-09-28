Sub copybat()
    Dim i, j, k, m, r As Integer
    Dim n, total_data As Long
    Dim path As String
    Dim title_area, data_column, data_areas As Range
    Dim name, dhno, nameutf8, a, rowNum
   
    'Set title_area = Application.InputBox(prompt:="请用鼠标选择表头及表标题所在区域", Title:="选择", Type:=8) '选取表头区域
    Set data_column = Application.InputBox(prompt:="请鼠标选择需要拆分数据的开始行区域", Title:="选择", Type:=8) '选取拆分起始处
    m = data_column.Row      '获取分割开始行所在区域行号
    r = data_column.Column   '获取分割开始行所在区域列号
    j = data_column.Columns.Count   '获取分割开始行区域列数
    i = Application.InputBox(prompt:="请输入每次分割数据条目数", Title:="选择")
    ' total_data = Cells(data_column(1, 1)).End(xlDown).Row - m + 1    '获取需要分割的数据总条数
    total_data = Sheets("Sheet1").[B65536].End(xlUp).Row    '获取需要分割的数据总条数
    If MsgBox("本次分割文件数据总数为:" & total_data & "条，将会被分割成" & WorksheetFunction.RoundUp(total_data / i, 0) & "个文件，" _
                & "点击“确定”开始分割，点击“取消”返回", vbOKCancel, "确认") = vbOK Then
        Filename = Application.InputBox(prompt:="请输入分割后的文件主名，默认为“分割文件”", Title:="选择", Default:="分割文件")
        With Application.FileDialog(msoFileDialogFolderPicker)  '获取分割后的文件存储路径
            If .Show = False Then Exit Sub
                path = .SelectedItems(1) & "\" '加入"\",否则，文件会被存储到选定路径的上一层
        End With
        Application.ScreenUpdating = False
        k = 0   '第几次分割输出，用于标识分割文件次数
        For n = m To total_data Step i   '从开始分割的行往下计数
        ' For n = m To Sheets("Sheet1").[B65536].End(xlUp).Row Step i   '从开始分割的行往下计数

            Set fs = CreateObject("Scripting.FileSystemObject")
            Set a = fs.CreateTextFile(path & Filename & k & ".vcf", True)
            For rowNum = (1 + k * i) To (1 + (k * i) + i) Step 1
                If rowNum >= Sheets("Sheet1").[B65536].End(xlUp).Row Then
                    Exit For
                End If
                
                a.WriteLine ("BEGIN:VCARD")
                name = VBA.Trim(Sheets("Sheet1").Cells(rowNum, 1))
                dhno = Sheets("Sheet1").Cells(rowNum, 2)
                ' nameutf8 = URLEncodeUTF8(name)
                a.WriteLine ("VERSION:3.0")
                a.WriteLine ("N;" & name & ";;;")
                a.WriteLine ("FN;CHARSET=UTF-8:" & name)
                a.WriteLine ("TEL;TYPE=CELL:" & dhno)
                a.WriteLine ("X-CLASS:private")
                a.WriteLine ("END:VCARD")
            Next rowNum
            a.Close
            k = k + 1







            ' Set data_areas = Range(Cells(n, r), Cells(n + i - 1, j))   '设置每次循环体内的分割数据主体
            ' Application.Union(title_area, data_areas).Select           '把表头区域以及本次循环体内的数据区域进行合并
            ' Selection.Copy
            ' Workbooks.Add
            ' Selection.PasteSpecial Paste:=xlPasteAllUsingSourceTheme, Operation:=xlNone _
            ' , SkipBlanks:=False, Transpose:=False      '特殊粘贴：包含源格式的粘贴，以便保持所有格式一致
        '    k = k + 1
        '    ActiveWorkbook.SaveAs Filename:=path & Filename & "_" & k & ".vcf", FileFormat:= _
        '     xlOpenXMLWorkbook, CreateBackup:=False      '按照既有的文件名、路径、循环次数合并起来存储文件
        '     ActiveWindow.Close
        Next n
        MsgBox "文件分割完毕！", vbDefaultButton1, "提示"
    End If
    Application.ScreenUpdating = True
End Sub





Private Sub CommandButton1_Click()
    Dim name
    Dim dhno
    Dim nameutf8
    Dim a
    Dim i
    For i = 1 To Sheets("数据").[B65536].End(xlUp).Row
        name = Sheets("数据").Cells(i, 1)
        dhno = Sheets("数据").Cells(i, 2)
        nameutf8 = URLEncodeUTF8(name)
        Set fs = CreateObject("Scripting.FileSystemObject")
        Set a = fs.CreateTextFile(ThisWorkbook.Path & "\vcf结果\" & name & ".vcf", True)
        a.WriteLine ("BEGIN:VCARD")
        a.WriteLine ("VERSION:2.1")
        a.WriteLine ("N;ENCODING=QUOTED-PRINTABLE;CHARSET=UTF-8:" & nameutf8 & ";;;;")
        a.WriteLine ("TEL;CELL:" & dhno)
        a.WriteLine ("X-CLASS:private")
        a.WriteLine ("END:VCARD")
        a.Close
    Next i
End Sub


Private Sub CommandButton1_Click()
    Dim name, dhno, nameutf8, a, i
    
    Set fs = CreateObject("Scripting.FileSystemObject")
    Set a = fs.CreateTextFile(ThisWorkbook.Path & "\通讯录.vcf", True)
    For i = 1 To Sheets("数据").[B65536].End(xlUp).Row
        name = Sheets("数据").Cells(i, 1)
        dhno = Sheets("数据").Cells(i, 2)
        nameutf8 = URLEncodeUTF8(name)
        a.WriteLine ("BEGIN:VCARD")
        a.WriteLine ("VERSION:2.1")
        a.WriteLine ("N;ENCODING=QUOTED-PRINTABLE;CHARSET=UTF-8:" & nameutf8 & ";;;;")
        a.WriteLine ("TEL;CELL:" & dhno)
        a.WriteLine ("X-CLASS:private")
        a.WriteLine ("END:VCARD")
    Next i
   a.Close
End Sub
