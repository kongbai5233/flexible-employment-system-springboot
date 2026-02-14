package com.example.demo;

import com.example.demo.pojo.UploadResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.sql.*;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class Upload {

    @Value("${upload.path}")
    private String UPLOAD_DIR;

    /**
     * 处理文件上传的POST请求
     *
     * @param file 用户上传的文件，MultipartFile 是 Spring 提供的接口，用于表示上传的文件。
     * @return 上传结果
     */
    @PostMapping("/upload")
    public UploadResponse upload(MultipartFile file) {
        UploadResponse imgMap = new UploadResponse();
        if (file == null || file.isEmpty()) {
            imgMap.setState( "文件为空，请重新上传");
            return imgMap;
        }

        // 检查上传路径
        File uploadDir = new File(UPLOAD_DIR);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

        // 获取原始文件名和扩展名
        String originalFilename = file.getOriginalFilename();
        if (originalFilename == null || !originalFilename.contains(".")) {
            imgMap.setState( "文件名无效");
            return imgMap;
        }

        String fileType = originalFilename.substring(originalFilename.lastIndexOf("."));
        // 校验文件扩展名（可选，根据需要启用白名单验证）
        if (!fileType.matches("\\.(jpg|png|jpeg|txt|pdf|docx)$")) {

            imgMap.setState("不支持的文件类型");
            return imgMap;
        }

        // 生成唯一文件名
        String fileName = UUID.randomUUID() + fileType;

        try {
            // 使用路径拼接来避免跨平台问题
            File targetFile = Paths.get(UPLOAD_DIR, fileName).toFile();
            file.transferTo(targetFile);
            imgMap.setState( "200");
            imgMap.setFileName( fileName);
            return imgMap;

        } catch (IOException e) {
            // 日志记录异常（推荐使用专业日志框架如Logback）
            e.printStackTrace();
            imgMap.setState( "文件上传失败");
            return imgMap;
        }
    }


}
