"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, MapPin, User, ChevronRight } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dữ liệu mẫu cho các câu chuyện bảo tồn
const conservationStories = [
  {
    id: 1,
    title: "Hành trình bảo vệ hổ Đông Dương tại Việt Nam",
    excerpt:
      "Câu chuyện về những nỗ lực không ngừng nghỉ của các nhà bảo tồn để bảo vệ loài hổ Đông Dương đang bị đe dọa tuyệt chủng tại Việt Nam.",
    content: `
      <p>Khi mặt trời vừa ló dạng trên những ngọn núi của Vườn Quốc gia Cát Tiên, Nguyễn Văn Thành đã bắt đầu cuộc tuần tra hàng ngày của mình. Là một kiểm lâm viên với hơn 15 năm kinh nghiệm, Thành đã dành phần lớn cuộc đời mình để bảo vệ một trong những loài động vật quý hiếm nhất Việt Nam: hổ Đông Dương.</p>
      
      <p>"Khi tôi bắt đầu công việc này, chúng tôi thường xuyên bắt gặp dấu chân hổ trong các cuộc tuần tra. Bây giờ, việc tìm thấy một dấu chân hổ là một sự kiện hiếm hoi và đáng mừng," Thành chia sẻ với ánh mắt trầm tư.</p>
      
      <p>Hổ Đông Dương (Panthera tigris corbetti) từng phân bố rộng rãi khắp Đông Nam Á, nhưng hiện nay số lượng của chúng đã giảm xuống mức báo động do săn bắt trái phép và mất môi trường sống. Tại Việt Nam, ước tính chỉ còn khoảng 5 cá thể sống trong tự nhiên.</p>
      
      <p>Dự án Bảo tồn Hổ Việt Nam, được thành lập vào năm 2010, là một nỗ lực hợp tác giữa chính phủ Việt Nam, các tổ chức phi chính phủ quốc tế và cộng đồng địa phương. Mục tiêu của dự án là tăng cường bảo vệ môi trường sống của hổ, ngăn chặn săn bắt trái phép và nâng cao nhận thức của cộng đồng.</p>
      
      <p>Trần Thị Mai, Giám đốc dự án, giải thích: "Chúng tôi đang thực hiện một chiến lược toàn diện bao gồm tuần tra rừng, giám sát bằng camera, giáo dục cộng đồng và phát triển sinh kế thay thế cho người dân địa phương."</p>
      
      <p>Một trong những thành công lớn nhất của dự án là sự tham gia của cộng đồng địa phương. Nhiều cựu thợ săn giờ đây đã trở thành những người bảo vệ rừng nhiệt thành.</p>
      
      <p>Lê Văn Hùng, một cựu thợ săn từ làng gần Vườn Quốc gia, chia sẻ: "Trước đây, tôi không hiểu tầm quan trọng của việc bảo vệ động vật hoang dã. Tôi chỉ nghĩ đến việc kiếm tiền để nuôi gia đình. Nhưng qua dự án, tôi đã học được rằng nếu chúng ta bảo vệ rừng và động vật, chúng sẽ mang lại lợi ích lâu dài cho tất cả chúng ta."</p>
      
      <p>Hùng hiện đang điều hành một homestay du lịch sinh thái, đón tiếp khách du lịch đến tham quan vườn quốc gia và tìm hiểu về công tác bảo tồn.</p>
      
      <p>Mặc dù còn nhiều thách thức phía trước, nhưng có những dấu hiệu đáng mừng. Các camera giám sát gần đây đã ghi lại hình ảnh của một con hổ cái và hai con non, mang lại hy vọng cho sự phục hồi của loài này tại Việt Nam.</p>
      
      <p>"Mỗi con hổ con là một tia hy vọng," Thành nói với nụ cười rạng rỡ. "Chúng là lý do chúng tôi tiếp tục công việc này, ngay cả trong những ngày khó khăn nhất."</p>
      
      <p>Câu chuyện về nỗ lực bảo tồn hổ tại Việt Nam là một ví dụ về cách con người có thể tạo ra sự khác biệt khi chúng ta làm việc cùng nhau vì một mục tiêu chung: bảo vệ những loài động vật quý hiếm của Trái Đất cho các thế hệ tương lai.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    author: "Lê Minh Tuấn",
    authorTitle: "Nhà báo môi trường",
    date: "2023-05-15",
    location: "Vườn Quốc gia Cát Tiên, Việt Nam",
    category: "field-work",
    tags: ["hổ", "việt nam", "bảo tồn", "kiểm lâm"],
  },
  {
    id: 2,
    title: "Những người phụ nữ bảo vệ voi ở Kenya",
    excerpt:
      "Câu chuyện về đội bảo vệ voi toàn nữ đầu tiên tại Kenya và cách họ đang thay đổi cục diện trong công tác bảo tồn động vật hoang dã.",
    content: `
      <p>Dưới ánh nắng gay gắt của đồng cỏ savanna Kenya, một nhóm phụ nữ mặc đồng phục màu xanh lá cây đang thực hiện cuộc tuần tra hàng ngày. Họ là Đội Voi Nữ, đội bảo vệ voi toàn nữ đầu tiên tại Kenya, và có lẽ là trên thế giới.</p>
      
      <p>"Nhiều người nghĩ rằng phụ nữ không thể làm công việc này," Florence Lepariyo, đội trưởng của nhóm, nói. "Chúng tôi đã chứng minh họ sai."</p>
      
      <p>Được thành lập vào năm 2019, Đội Voi Nữ bao gồm 12 thành viên từ các cộng đồng Maasai và Samburu địa phương. Trong một xã hội nơi phụ nữ thường bị giới hạn trong các vai trò truyền thống, việc trở thành kiểm lâm viên là một bước đột phá đáng kể.</p>
      
      <p>Công việc của họ bao gồm tuần tra khu bảo tồn để ngăn chặn săn trộm, giám sát đàn voi, và làm việc với cộng đồng địa phương để giảm thiểu xung đột giữa người và voi.</p>
      
      <p>"Chúng tôi đi bộ khoảng 20 km mỗi ngày," Sarah Lekimain, một thành viên của đội, giải thích. "Đôi khi chúng tôi phải đối mặt với những tình huống nguy hiểm, như gặp phải thợ săn trộm có vũ trang hoặc động vật hoang dã hung dữ. Nhưng chúng tôi đã được đào tạo để xử lý những tình huống này."</p>
      
      <p>Điều làm cho Đội Voi Nữ đặc biệt hiệu quả là mối quan hệ của họ với cộng đồng địa phương. Là phụ nữ, họ thường được tin tưởng và tôn trọng trong các làng, điều này giúp họ thu thập thông tin tình báo về hoạt động săn trộm và giáo dục người dân về tầm quan trọng của việc bảo tồn.</p>
      
      <p>"Khi chúng tôi nói chuyện với các bà mẹ và trẻ em trong làng, chúng tôi có thể truyền cảm hứng cho thế hệ tiếp theo của những người bảo vệ động vật hoang dã," Lepariyo nói.</p>
      
      <p>Kể từ khi Đội Voi Nữ bắt đầu hoạt động, số vụ săn trộm voi trong khu vực đã giảm đáng kể. Họ cũng đã giúp giải quyết nhiều vụ xung đột giữa người và voi, bảo vệ cả cộng đồng địa phương và đàn voi.</p>
      
      <p>Ngoài công việc bảo tồn, Đội Voi Nữ còn đóng vai trò quan trọng trong việc thúc đẩy bình đẳng giới trong cộng đồng của họ. Bằng cách chứng minh rằng phụ nữ có thể thành công trong một lĩnh vực truyền thống của nam giới, họ đang phá vỡ rào cản và mở ra cơ hội mới cho phụ nữ và trẻ em gái.</p>
      
      <p>"Tôi muốn con gái tôi biết rằng nó có thể trở thành bất cứ thứ gì nó muốn," Lekimain nói. "Nếu tôi có thể bảo vệ voi, nó có thể làm bất cứ điều gì."</p>
      
      <p>Câu chuyện của Đội Voi Nữ là một ví dụ đầy cảm hứng về cách bảo tồn động vật hoang dã có thể đi đôi với trao quyền cho cộng đồng và thúc đẩy bình đẳng giới. Khi họ tiếp tục công việc quan trọng của mình, họ không chỉ bảo vệ voi mà còn đang thay đổi nhận thức về vai trò của phụ nữ trong xã hội.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    author: "Sarah Johnson",
    authorTitle: "Nhà báo môi trường",
    date: "2023-03-08",
    location: "Khu Bảo tồn Amboseli, Kenya",
    category: "community",
    tags: ["voi", "kenya", "phụ nữ", "bảo tồn"],
  },
  {
    id: 3,
    title: "Công nghệ AI trong việc theo dõi và bảo vệ động vật hoang dã",
    excerpt:
      "Khám phá cách các nhà khoa học đang sử dụng trí tuệ nhân tạo để cách mạng hóa công tác bảo tồn động vật hoang dã trên toàn thế giới.",
    content: `
      <p>Trong một phòng máy tính nhỏ tại Đại học California, Berkeley, tiến sĩ James Chen đang xem xét hàng nghìn hình ảnh được chụp bởi camera bẫy trong rừng Amazon. Nhưng thay vì phải dành hàng tháng để phân loại thủ công từng hình ảnh, một thuật toán trí tuệ nhân tạo (AI) đang làm việc đó cho ông - xác định các loài động vật, đếm số lượng cá thể, và thậm chí theo dõi các mẫu hành vi.</p>
      
      <p>"Đây là một cuộc cách mạng trong lĩnh vực bảo tồn," Chen giải thích. "Những gì trước đây mất hàng năm để phân tích, giờ đây có thể được thực hiện trong vài giờ với độ chính xác cao hơn."</p>
      
      <p>Trên khắp thế giới, các nhà khoa học và nhà bảo tồn đang áp dụng công nghệ AI để giải quyết một số thách thức cấp bách nhất trong bảo tồn động vật hoang dã. Từ việc chống săn trộm đến giám sát quần thể và nghiên cứu hành vi, AI đang mở ra những khả năng mới.</p>
      
      <p>Tại Công viên Quốc gia Kruger ở Nam Phi, một hệ thống AI có tên "TrackAI" đang giúp kiểm lâm viên dự đoán nơi thợ săn trộm tê giác có thể tấn công tiếp theo. Bằng cách phân tích dữ liệu từ các vụ săn trộm trước đây, điều kiện thời tiết, pha trăng, và thậm chí cả hoạt động trên mạng xã hội, hệ thống có thể xác định các "điểm nóng" nơi tê giác có nguy cơ cao nhất.</p>
      
      <p>"Trước đây, chúng tôi chỉ có thể phản ứng sau khi một vụ săn trộm đã xảy ra," Nomsa Sibeko, trưởng nhóm kiểm lâm tại Kruger, nói. "Giờ đây, chúng tôi có thể chủ động triển khai các đội tuần tra đến những khu vực có nguy cơ cao nhất, ngăn chặn thợ săn trộm trước khi họ có thể gây hại."</p>
      
      <p>Kết quả đã rất ấn tượng. Kể từ khi triển khai TrackAI vào năm 2021, số vụ săn trộm tê giác tại Kruger đã giảm 37%.</p>
      
      <p>Ở Indonesia, các nhà khoa học đang sử dụng AI để giám sát quần thể đười ươi bị đe dọa. Các thuật toán nhận dạng khuôn mặt có thể xác định từng cá thể đười ươi từ hình ảnh camera bẫy, cho phép các nhà nghiên cứu theo dõi chính xác số lượng quần thể mà không cần can thiệp xâm lấn.</p>
      
      <p>"Mỗi đười ươi có khuôn mặt độc đáo, giống như dấu vân tay của con người," tiến sĩ Mei Lin, nhà linh trưởng học tại Đại học Indonesia, giải thích. "AI có thể nhận ra những đặc điểm này với độ chính xác đáng kinh ngạc, ngay cả từ những hình ảnh chất lượng thấp hoặc bị che khuất một phần."</p>
      
      <p>Có lẽ ứng dụng AI thú vị nhất trong bảo tồn là khả năng hiểu và thậm chí "dịch" giao tiếp động vật. Tại Đại học Oxford, một nhóm nghiên cứu đang sử dụng các thuật toán học sâu để giải mã tiếng kêu của voi.</p>
      
      <p>"Voi có một hệ thống giao tiếp phức tạp mà chúng tôi chỉ mới bắt đầu hiểu," tiến sĩ Elizabeth Foster, người đứng đầu dự án, nói. "AI đang giúp chúng tôi xác định các mẫu và ý nghĩa trong tiếng kêu của chúng, bao gồm cả cảnh báo về mối nguy hiểm, thông tin về nguồn thức ăn, và thậm chí là tương tác xã hội."</p>
      
      <p>Hiểu biết này không chỉ có giá trị khoa học mà còn có ứng dụng thực tế trong việc giảm xung đột giữa người và voi. Bằng cách biết khi nào voi đang giao tiếp về sự khó chịu hoặc hung hăng, các nhà bảo tồn có thể can thiệp trước khi xảy ra xung đột.</p>
      
      <p>Tuy nhiên, việc áp dụng AI trong bảo tồn không phải không có thách thức. Chi phí, nhu cầu về chuyên môn kỹ thuật, và khả năng tiếp cận công nghệ ở các vùng sâu vùng xa vẫn là những rào cản đáng kể.</p>
      
      <p>"Chúng tôi cần đảm bảo rằng những công nghệ này không chỉ có sẵn cho các tổ chức lớn ở các nước giàu," Chen nhấn mạnh. "Bảo tồn là một nỗ lực toàn cầu, và công cụ của chúng tôi cũng phải vậy."</p>
      
      <p>Để giải quyết vấn đề này, nhiều nhà phát triển đang tạo ra các giải pháp AI "nhẹ" có thể chạy trên thiết bị di động hoặc phần cứng giá rẻ, và cung cấp đào tạo cho các nhà bảo tồn địa phương.</p>
      
      <p>Khi công nghệ tiếp tục phát triển, tiềm năng của AI trong bảo tồn động vật hoang dã là vô hạn. Từ drones tự động phát hiện săn trộm đến các mô hình dự đoán tác động của biến đổi khí hậu đối với môi trường sống của động vật, AI đang cung cấp cho các nhà bảo tồn những công cụ mới mạnh mẽ trong cuộc chiến bảo vệ đa dạng sinh học của hành tinh chúng ta.</p>
      
      <p>"Đây không phải là về việc thay thế con người trong bảo tồn," Chen kết luận. "Đây là về việc trao quyền cho con người làm công việc quan trọng này hiệu quả hơn. Cuối cùng, đó là sự kết hợp giữa đam mê con người và sức mạnh của công nghệ sẽ giúp chúng ta bảo vệ những loài tuyệt vời mà chúng ta chia sẻ hành tinh này."</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    author: "Trần Đức Minh",
    authorTitle: "Nhà khoa học dữ liệu",
    date: "2023-07-22",
    location: "Berkeley, California",
    category: "technology",
    tags: ["AI", "công nghệ", "camera bẫy", "nghiên cứu"],
  },
  {
    id: 4,
    title: "Hành trình 20 năm bảo tồn rùa biển tại Côn Đảo",
    excerpt:
      "Câu chuyện cảm động về nỗ lực bảo tồn rùa biển tại Côn Đảo và những kết quả đáng kinh ngạc sau hai thập kỷ làm việc không mệt mỏi.",
    content: `
      <p>Khi mặt trời lặn xuống đường chân trời trên bãi biển Côn Đảo, Nguyễn Văn Lộc nhẹ nhàng di chuyển trên cát, đèn pin đỏ duy nhất của ông chiếu sáng con đường phía trước. Ông đang tìm kiếm dấu hiệu của những vị khách đặc biệt: những con rùa biển mẹ đến đẻ trứng trên bãi biển nơi chúng được sinh ra nhiều năm trước.</p>
      
      <p>"Đây là đêm thứ 4,253 của tôi trên bãi biển này," Lộc nói với nụ cười nhẹ. "Tôi đã đếm từng đêm kể từ khi chúng tôi bắt đầu chương trình bảo tồn vào năm 2003."</p>
      
      <p>Lộc là một trong những thành viên sáng lập của Dự án Bảo tồn Rùa biển Côn Đảo, một nỗ lực hợp tác giữa Vườn Quốc gia Côn Đảo và các tổ chức bảo tồn quốc tế. Khi dự án bắt đầu, tương lai của rùa biển tại Việt Nam trông rất ảm đạm.</p>
      
      <p>"Chúng tôi đã mất 80% số lượng rùa biển đến làm tổ trong vòng 20 năm trước đó," Lộc giải thích. "Săn bắt trái phép, đánh bắt cá không chủ ý, ô nhiễm nhựa, và phát triển ven biển đã đẩy quần thể rùa biển đến bờ vực tuyệt chủng."</p>
      
      <p>Côn Đảo, một quần đảo nằm cách đất liền Việt Nam khoảng 80 km, là nơi làm tổ quan trọng của rùa xanh (Chelonia mydas) và rùa đồi mồi (Eretmochelys imbricata) - cả hai loài đều đang bị đe dọa nghiêm trọng.</p>
      
      <p>Dự án bắt đầu với những bước đơn giản nhưng hiệu quả: tuần tra bãi biển 24/7 để ngăn chặn săn trộm, di dời tổ rùa đến nơi an toàn hơn khi cần thiết, và gắn thẻ theo dõi cho rùa mẹ.</p>
      
      <p>"Những đêm đầu tiên, chúng tôi chỉ thấy một hoặc hai con rùa mẹ mỗi tuần," Phạm Thị Hoa, một kiểm lâm viên lâu năm của dự án, nhớ lại. "Chúng tôi đã rất lo lắng rằng chúng tôi đã bắt đầu quá muộn."</p>
      
      <p>Nhưng dần dần, những nỗ lực của họ bắt đầu có kết quả. Khi tin tức về dự án lan rộng, cộng đồng địa phương bắt đầu tham gia. Ngư dân địa phương được đào tạo về cách giải phóng an toàn rùa biển vô tình bị mắc vào lưới. Trường học bắt đầu tổ chức các chuyến tham quan giáo dục. Và chính quyền địa phương ban hành các quy định nghiêm ngặt hơn về phát triển ven biển.</p>
      
      <p>Một bước ngoặt quan trọng đến vào năm 2008 khi dự án bắt đầu chương trình "Nhận nuôi một tổ rùa". Du khách và công ty có thể tài trợ cho việc bảo vệ một tổ rùa và sau đó nhận được cập nhật về khi trứng nở và rùa con được thả về biển.</p>
      
      <p>"Chương trình này không chỉ cung cấp nguồn tài chính quan trọng mà còn tạo ra một cộng đồng toàn cầu những người ủng hộ rùa biển Côn Đảo," Hoa giải thích.</p>
      
      <p>Hai mươi năm sau khi bắt đầu, kết quả của dự án đã vượt xa mong đợi ban đầu. Số lượng tổ rùa được ghi nhận hàng năm đã tăng từ khoảng 80 vào năm 2003 lên hơn 300 vào năm 2023. Hơn 500,000 rùa con đã được thả an toàn ra biển. Và quan trọng nhất, một số rùa được gắn thẻ trong những năm đầu của dự án giờ đã trở lại làm tổ - một dấu hiệu rõ ràng của sự thành công.</p>
      
      <p>"Khi tôi thấy một con rùa mẹ với thẻ cũ của chúng tôi trở lại bãi biển này, tôi cảm thấy như gặp lại một người bạn cũ," Lộc nói, xúc động. "Nó cho chúng tôi biết rằng công việc của chúng tôi đang có tác động thực sự."</p>
      
      <p>Dự án cũng đã tạo ra tác động kinh tế tích cực cho cộng đồng địa phương. Du lịch sinh thái tập trung vào rùa biển giờ đây là một phần quan trọng của nền kinh tế Côn Đảo, tạo ra việc làm và thu nhập cho người dân địa phương.</p>
      
      <p>"Trước đây, một số người trong cộng đồng của chúng tôi xem rùa biển chỉ là nguồn thức ăn hoặc thu nhập từ việc bán trứng và mai rùa," Trần Văn Bình, chủ một homestay địa phương, nói. "Bây giờ chúng tôi hiểu rằng một con rùa sống có giá trị hơn nhiều lần so với một con rùa chết. Du khách đến từ khắp nơi trên thế giới để xem rùa của chúng tôi."</p>
      
      <p>Mặc dù đã đạt được nhiều thành công, nhưng dự án vẫn phải đối mặt với những thách thức mới. Biến đổi khí hậu đang làm tăng nhiệt độ cát, ảnh hưởng đến tỷ lệ giới tính của rùa con (nhiệt độ  Biến đổi khí hậu đang làm tăng nhiệt độ cát, ảnh hưởng đến tỷ lệ giới tính của rùa con (nhiệt độ cao hơn tạo ra nhiều rùa cái hơn). Rác thải nhựa đại dương ngày càng trở thành mối đe dọa lớn. Và sự phát triển du lịch, mặc dù mang lại lợi ích kinh tế, cũng tạo ra áp lực mới lên các bãi biển làm tổ.

      <p>"Chúng tôi đang thích ứng với những thách thức này," Hoa nói. "Chúng tôi đang thử nghiệm các phương pháp làm mát tổ rùa, tổ chức các chiến dịch làm sạch bãi biển thường xuyên, và làm việc với các công ty du lịch để đảm bảo hoạt động của họ không gây hại cho rùa."</p>
      
      <p>Khi Lộc tiếp tục cuộc tuần tra đêm của mình, ông dừng lại đột ngột và chỉ vào một dấu vết trên cát. "Nhìn kìa," ông thì thầm, "một con rùa mẹ vừa lên bờ." Ông và Hoa quan sát từ xa khi con rùa xanh khổng lồ chậm rãi di chuyển lên bãi biển, đào một cái hố sâu bằng vây sau, và bắt đầu đẻ trứng.</p>
      
      <p>"Đây là lý do chúng tôi làm việc này," Lộc nói, ánh mắt không rời khỏi con rùa. "Để đảm bảo rằng 20 năm nữa, 50 năm nữa, 100 năm nữa, cảnh tượng kỳ diệu này vẫn diễn ra trên những bãi biển của chúng ta."</p>
      
      <p>Câu chuyện về Dự án Bảo tồn Rùa biển Côn Đảo là minh chứng cho sức mạnh của sự kiên trì, hợp tác cộng đồng, và niềm tin rằng ngay cả khi đối mặt với những thách thức dường như không thể vượt qua, một nhóm nhỏ những người tận tâm vẫn có thể tạo ra sự khác biệt to lớn cho tương lai của các loài đang bị đe dọa.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    author: "Nguyễn Thị Hương",
    authorTitle: "Nhà bảo tồn biển",
    date: "2023-06-10",
    location: "Côn Đảo, Việt Nam",
    category: "success-story",
    tags: ["rùa biển", "việt nam", "bảo tồn biển", "thành công"],
  },
  {
    id: 5,
    title: "Từ thợ săn đến người bảo vệ: Câu chuyện chuyển đổi ở Amazon",
    excerpt:
      "Câu chuyện cảm động về cách một cộng đồng thợ săn ở Amazon đã trở thành những người bảo vệ rừng nhiệt tình nhất.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Carlos Mendez",
    authorTitle: "Nhà nhân học",
    date: "2023-04-18",
    location: "Rừng Amazon, Brazil",
    category: "community",
    tags: ["amazon", "cộng đồng", "thợ săn", "chuyển đổi"],
  },
  {
    id: 6,
    title: "Sống chung với sư tử: Giải pháp sáng tạo cho xung đột người-động vật ở Tanzania",
    excerpt:
      "Khám phá cách người dân địa phương ở Tanzania đang tìm ra những cách sáng tạo để sống hòa bình bên cạnh loài săn mồi đỉnh cao.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Amina Nkosi",
    authorTitle: "Nhà nghiên cứu động vật hoang dã",
    date: "2023-02-05",
    location: "Serengeti, Tanzania",
    category: "community",
    tags: ["sư tử", "xung đột", "tanzania", "giải pháp"],
  },
]

export default function StoriesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredStories, setFilteredStories] = useState(conservationStories)
  const [selectedStory, setSelectedStory] = useState(null)

  // Lọc câu chuyện dựa trên tìm kiếm và danh mục
  useState(() => {
    let results = conservationStories

    // Lọc theo danh mục
    if (activeCategory !== "all") {
      results = results.filter((story) => story.category === activeCategory)
    }

    // Lọc theo từ khóa tìm kiếm
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase()
      results = results.filter(
        (story) =>
          story.title.toLowerCase().includes(searchTermLower) ||
          story.excerpt.toLowerCase().includes(searchTermLower) ||
          story.author.toLowerCase().includes(searchTermLower) ||
          story.tags.some((tag) => tag.toLowerCase().includes(searchTermLower)),
      )
    }

    setFilteredStories(results)
  }, [searchTerm, activeCategory])

  // Xử lý khi nhấp vào câu chuyện
  const handleStoryClick = (story) => {
    setSelectedStory(story)
    window.scrollTo(0, 0)
  }

  // Xử lý khi quay lại danh sách
  const handleBackToList = () => {
    setSelectedStory(null)
  }

  return (
    <div className="container py-12">
      {!selectedStory ? (
        <>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Câu chuyện từ các nhà bảo tồn</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Khám phá những câu chuyện đầy cảm hứng từ các nhà khoa học, nhà bảo tồn và tình nguyện viên đang nỗ lực
              bảo vệ động vật hoang dã trên khắp thế giới.
            </p>
          </div>

          {/* Thanh tìm kiếm */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Tìm kiếm câu chuyện..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Tabs danh mục */}
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="w-full justify-start mb-6 bg-gray-100">
              <TabsTrigger value="all">Tất cả</TabsTrigger>
              <TabsTrigger value="field-work">Công việc thực địa</TabsTrigger>
              <TabsTrigger value="community">Cộng đồng</TabsTrigger>
              <TabsTrigger value="technology">Công nghệ</TabsTrigger>
              <TabsTrigger value="success-story">Câu chuyện thành công</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Danh sách câu chuyện */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <Card
                key={story.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
                onClick={() => handleStoryClick(story)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="bg-primary-50 text-primary-700">
                      {story.category === "field-work"
                        ? "Công việc thực địa"
                        : story.category === "community"
                          ? "Cộng đồng"
                          : story.category === "technology"
                            ? "Công nghệ"
                            : story.category === "success-story"
                              ? "Câu chuyện thành công"
                              : story.category}
                    </Badge>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(story.date).toLocaleDateString("vi-VN")}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{story.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <p className="text-gray-600 line-clamp-3">{story.excerpt}</p>
                </CardContent>
                <CardFooter className="pt-2 border-t mt-auto">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <span className="font-semibold">{story.author.charAt(0)}</span>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">{story.author}</p>
                        <p className="text-gray-500 text-xs">{story.authorTitle}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <MapPin size={14} className="mr-1" />
                      <span className="truncate max-w-[100px]">{story.location}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Không tìm thấy kết quả</h3>
              <p className="text-gray-600">
                Không tìm thấy câu chuyện nào phù hợp với tiêu chí tìm kiếm của bạn. Vui lòng thử lại với từ khóa khác.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("")
                  setActiveCategory("all")
                }}
              >
                Xóa bộ lọc
              </Button>
            </div>
          )}
        </>
      ) : (
        // Chi tiết câu chuyện
        <div>
          <Button variant="ghost" className="mb-6 flex items-center" onClick={handleBackToList}>
            <ChevronRight size={16} className="mr-1 rotate-180" />
            Quay lại danh sách
          </Button>

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedStory.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-6">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>
                  {selectedStory.author}, {selectedStory.authorTitle}
                </span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{new Date(selectedStory.date).toLocaleDateString("vi-VN")}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                <span>{selectedStory.location}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-[21/9] mb-8 rounded-lg overflow-hidden">
            <Image
              src={selectedStory.image || "/placeholder.svg"}
              alt={selectedStory.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: selectedStory.content }} />
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Về tác giả</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold text-lg">{selectedStory.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium">{selectedStory.author}</p>
                    <p className="text-gray-500 text-sm">{selectedStory.authorTitle}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Thẻ</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStory.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Chia sẻ</h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="w-9 h-9">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon" className="w-9 h-9">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon" className="w-9 h-9">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon" className="w-9 h-9">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Câu chuyện liên quan */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Câu chuyện liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {conservationStories
                .filter((story) => story.id !== selectedStory.id && story.category === selectedStory.category)
                .slice(0, 3)
                .map((story) => (
                  <Card
                    key={story.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => handleStoryClick(story)}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg line-clamp-2">{story.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-gray-600 text-sm line-clamp-2">{story.excerpt}</p>
                    </CardContent>
                    <CardFooter className="pt-2 text-sm text-gray-500">
                      {new Date(story.date).toLocaleDateString("vi-VN")}
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

