package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class UploadFilter implements WebMvcConfigurer {

    // 从配置文件中注入文件上传的目录路径
    @Value("${upload.path}")
    private String FILE_PATH;

    @Value("${index.path}")
    private String INDEX_PATH;

    @Value("${hired.path}")
    private String HIRED_PATH;

    /**
     * 配置静态资源映射，使得可以通过特定的 URL 访问上传的文件。
     * 例如：通过 http://localhost:8080/uploads/xxxxx.png 访问对应的文件。
     *
     * @param registry Spring 的资源处理注册器
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 检查是否配置了文件路径
        if (FILE_PATH == null || FILE_PATH.isEmpty()) {
            throw new IllegalArgumentException("文件路径未正确配置，请检查 application.properties 中的 upload.path 属性");
        }

        // 配置资源处理器，匹配 "/uploads/**" 的 URL 路径
        registry.addResourceHandler("/upload/**")
                // 添加文件系统路径作为静态资源的位置，确保路径跨平台兼容
                .addResourceLocations(getFormattedFilePath(FILE_PATH));

        registry.addResourceHandler("/index/**")
                .addResourceLocations(getFormattedFilePath(INDEX_PATH));


        registry.addResourceHandler("/hired/**")
                .addResourceLocations(getFormattedFilePath(HIRED_PATH));
    }

    /**
     * 格式化文件路径以适应不同操作系统
     *
     * @param path 文件路径
     * @return 格式化后的路径，适用于资源映射
     */
    private String getFormattedFilePath(String path) {
        // 确保路径以 "/" 结尾（防止拼接时出现路径问题）
        if (!path.endsWith("/")) {
            path = path + "/";
        }

        // 对于 Windows 系统需要特殊处理，使用 "file:/"
        if (System.getProperty("os.name").toLowerCase().contains("win")) {
            return "file:/" + path.replace("\\", "/");
        }
        // 对于其他操作系统，使用标准的 "file:///"
        return "file:///" + path;
    }

}
