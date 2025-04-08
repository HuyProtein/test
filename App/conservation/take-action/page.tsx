"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function TakeActionPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập địa chỉ email của bạn.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      toast({
        title: "Đăng ký thành công!",
        description: "Cảm ơn bạn đã đăng ký nhận bản tin của chúng tôi.",
      });
    }, 1000);
  };
  
  const handleContact = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      toast({
        title: "Gửi thành công!",
        description: "Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm nhất có thể.",
      });
    }, 1000);
  };
  
  const handleDonate = () => {
    toast({
      title: "Chuyển hướng đến trang thanh toán",
      description: "Bạn sẽ được chuyển hướng đến trang thanh toán an toàn.",
      action: <ToastAction altText="Đóng">Đóng</ToastAction>,
    });
  };

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Hành động vì Động vật Hoang dã</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Mỗi người đều có thể đóng góp vào công tác bảo tồn động vật hoang dã. Khám phá những cách bạn có thể giúp đỡ và tạo nên sự khác biệt.
        </p>
      </div>
      
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-16">
        <div className="aspect-[21/9] relative">
          <Image 
            src="/placeholder.svg?height=600&width=1400" 
            alt="Hành động vì động vật hoang dã"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="p-8 md:p-12 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mỗi hành động đều quan trọng</h2>
            <p className="text-white/80 mb-6">
              Từ những việc nhỏ hàng ngày đến những đóng góp lớn hơn, mỗi hành động của bạn đều có thể tạo nên sự khác biệt trong việc bảo vệ động vật hoang dã và môi trường sống của chúng.
            </p>
          </div>
        </div>
      </div>
      
      {/* Ways to Help */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Cách bạn có thể giúp đỡ</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Có nhiều cách để bạn có thể đóng góp vào công tác bảo tồn động vật hoang dã, từ những hành động đơn giản hàng ngày đến những đóng góp lớn hơn.
          </p>
        </div>
        
        <Tabs defaultValue="everyday" className="w-full">
          <TabsList className="w-full justify-start mb-6 bg-gray-100">
            <TabsTrigger value="everyday">Hành động hàng ngày</TabsTrigger>
            <TabsTrigger value="donate">Ủng hộ & Quyên góp</TabsTrigger>
            <TabsTrigger value="volunteer">Tình nguyện viên</TabsTrigger>
            <TabsTrigger value="advocate">Vận động chính sách</TabsTrigger>
          </TabsList>
          
          <TabsContent value="everyday" className="animate-in fade-in-50 duration-300">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <CardTitle>Tiêu dùng có trách nhiệm</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Không mua các sản phẩm làm từ động vật hoang dã</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Chọn các sản phẩm có chứng nhận bền vững</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Giảm tiêu thụ thịt và sử dụng các sản phẩm từ động vật</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Tránh các sản phẩm có dầu cọ không bền vững</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle>Giảm thiểu tác động môi trường</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Giảm sử dụng nhựa một lần</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Tiết kiệm nước và năng lượng</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Sử dụng phương tiện giao thông công cộng hoặc xe đạp</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Tái chế và tái sử dụng</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Trồng cây và tạo môi trường sống cho động vật hoang dã địa phương</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <CardTitle>Nâng cao nhận thức</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Chia sẻ thông tin về bảo tồn động vật hoang dã trên mạng xã hội</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Giáo dục gia đình và bạn bè về tầm quan trọng của động vật hoang dã</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Tham gia các sự kiện bảo tồn địa phương</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.\

