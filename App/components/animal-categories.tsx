"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AnimalCategories() {
  const [activeTab, setActiveTab] = useState("mammals")

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="section-header">
          <h2>Phân loại Động vật Hoang dã</h2>
          <div className="underline"></div>
        </div>

        <div className="tabs mx-auto max-w-4xl mb-12">
          <div className="tab-header flex flex-wrap justify-center">
            <div className={`tab ${activeTab === "mammals" ? "active" : ""}`} onClick={() => setActiveTab("mammals")}>
              Động vật có vú
            </div>
            <div className={`tab ${activeTab === "birds" ? "active" : ""}`} onClick={() => setActiveTab("birds")}>
              Chim
            </div>
            <div className={`tab ${activeTab === "reptiles" ? "active" : ""}`} onClick={() => setActiveTab("reptiles")}>
              Bò sát
            </div>
            <div
              className={`tab ${activeTab === "amphibians" ? "active" : ""}`}
              onClick={() => setActiveTab("amphibians")}
            >
              Lưỡng cư
            </div>
            <div className={`tab ${activeTab === "fish" ? "active" : ""}`} onClick={() => setActiveTab("fish")}>
              Cá
            </div>
            <div className={`tab ${activeTab === "insects" ? "active" : ""}`} onClick={() => setActiveTab("insects")}>
              Côn trùng
            </div>
          </div>

          <div className="tab-content bg-white rounded-lg shadow-md p-6">
            {activeTab === "mammals" && (
              <div className="tab-pane active">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Động vật có vú</h3>
                    <p className="mb-4">
                      Động vật có vú là nhóm động vật có xương sống, đặc trưng bởi tuyến vú ở con cái, lông trên cơ thể,
                      và khả năng điều hòa thân nhiệt. Chúng sinh con và nuôi con bằng sữa.
                    </p>
                    <p className="mb-4">
                      Nhóm này bao gồm các loài thú lớn như voi, hổ, gấu; các loài linh trưởng như khỉ, vượn; các loài
                      động vật ăn cỏ như hươu, nai; và nhiều loài khác.
                    </p>
                    <p className="mb-6">
                      Hiện có khoảng 6,400 loài động vật có vú được biết đến, phân bố ở hầu hết các môi trường sống trên
                      Trái Đất, từ sa mạc đến rừng nhiệt đới, từ đại dương đến vùng cực.
                    </p>
                    <Link
                      href="/animals/mammals"
                      className="inline-flex items-center text-primary-600 hover:text-primary-800"
                    >
                      Tìm hiểu thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Động vật có vú"
                      width={600}
                      height={400}
                      className="rounded-lg shadow object-cover h-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "birds" && (
              <div className="tab-pane active">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Chim</h3>
                    <p className="mb-4">
                      Chim là nhóm động vật có xương sống, đặc trưng bởi lông vũ, mỏ không răng, và khả năng đẻ trứng có
                      vỏ cứng. Hầu hết các loài chim có khả năng bay.
                    </p>
                    <p className="mb-4">
                      Nhóm này bao gồm các loài chim săn mồi như đại bàng, diều hâu; chim nước như vịt, ngỗng; chim biết
                      hót như chim sẻ, họa mi; và nhiều loài khác.
                    </p>
                    <p className="mb-6">
                      Hiện có khoảng 10,000 loài chim được biết đến, phân bố ở hầu hết các môi trường sống trên Trái
                      Đất, từ sa mạc đến rừng nhiệt đới, từ đại dương đến vùng cực.
                    </p>
                    <Link
                      href="/animals/birds"
                      className="inline-flex items-center text-primary-600 hover:text-primary-800"
                      className="inline-flex items-center text-primary-600 hover:text-primary-800"
                    >
                      Tìm hiểu thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Chim"
                      width={600}
                      height={400}
                      className="rounded-lg shadow object-cover h-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reptiles" && (
              <div className="tab-pane active">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Bò sát</h3>
                    <p className="mb-4">
                      Bò sát là nhóm động vật có xương sống, đặc trưng bởi da khô có vảy, đẻ trứng có vỏ, và là động vật
                      máu lạnh (không điều hòa được thân nhiệt).
                    </p>
                    <p className="mb-4">
                      Nhóm này bao gồm các loài rắn, thằn lằn, cá sấu, rùa, và các loài khác. Bò sát có mặt trên Trái
                      Đất từ hơn 300 triệu năm trước.
                    </p>
                    <p className="mb-6">
                      Hiện có khoảng 10,000 loài bò sát được biết đến, phân bố ở hầu hết các môi trường sống trên Trái
                      Đất, đặc biệt là ở các vùng nhiệt đới và cận nhiệt đới.
                    </p>
                    <Link
                      href="/animals/reptiles"
                      className="inline-flex items-center text-primary-600 hover:text-primary-800"
                    >
                      Tìm hiểu thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Bò sát"
                      width={600}
                      height={400}
                      className="rounded-lg shadow object-cover h-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "amphibians" && (
              <div className="tab-pane active">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Lưỡng cư</h3>
                    <p className="mb-4">
                      Lưỡng cư là nhóm động vật có xương sống, có khả năng sống cả trên cạn và dưới nước. Chúng có da ẩm
                      không vảy, đẻ trứng không vỏ, và thường trải qua quá trình biến thái.
                    </p>
                    <p className="mb-4">
                      Nhóm này bao gồm các loài ếch, nhái, cóc, kỳ nhông, và các loài khác. Lưỡng cư là một trong những
                      nhóm động vật đầu tiên tiến hóa lên sống trên cạn.
                    </p>
                    <p className="mb-6">
                      Hiện có khoảng 8,000 loài lưỡng cư được biết đến, phân bố ở hầu hết các môi trường sống trên Trái
                      Đất, đặc biệt là ở các vùng có nguồn nước ngọt.
                    </p>
                    <Link
                      href="/animals/amphibians"
                      className="inline-flex items-center text-primary-600 hover:text-primary-800"
                    >
                      Tìm hiểu thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Lưỡng cư"
                      width={600}
                      height={400}
                      className="rounded-lg shadow object-cover h-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "fish" && (
              <div className="tab-pane active">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Cá</h3>
                    <p className="mb-4">
                      Cá là nhóm động vật có xương sống sống dưới nước, đặc trưng bởi mang để hô hấp, vây để di chuyển,
                      và thường có vảy bao phủ cơ thể.
                    </p>
                    <p className="mb-4">
                      Nhóm này bao gồm cá nước ngọt, cá biển, và nhiều loài khác với hình dạng, kích thước và tập tính
                      đa dạng. Cá là nhóm động vật có xương sống đa dạng nhất.
                    </p>
                    <p className="mb-6">
                      Hiện có khoảng 34,000 loài cá được biết đến, phân bố ở hầu hết các môi trường nước trên Trái Đất,
                      từ suối núi cao đến đáy đại dương sâu.
                    </p>
                    <Link
                      href="/animals/fish"
                      className="inline-flex items-center text-primary-600 hover:text-primary-800"
                    >
                      Tìm hiểu thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Cá"
                      width={600}
                      height={400}
                      className="rounded-lg shadow object-cover h-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "insects" && (
              <div className="tab-pane active">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Côn trùng</h3>
                    <p className="mb-4">
                      Côn trùng là nhóm động vật không xương sống thuộc lớp Hexapoda, đặc trưng bởi cơ thể phân thành ba
                      phần (đầu, ngực, bụng), ba đôi chân, và thường có cánh.
                    </p>
                    <p className="mb-4">
                      Nhóm này bao gồm các loài bướm, ong, kiến, chuồn chuồn, bọ cánh cứng và nhiều loài khác. Côn trùng
                      là nhóm động vật đa dạng nhất trên Trái Đất.
                    </p>
                    <p className="mb-6">
                      Hiện có khoảng 1 triệu loài côn trùng đã được mô tả, nhưng ước tính có thể có tới 10 triệu loài
                      tồn tại, phân bố ở hầu hết các môi trường sống trên Trái Đất.
                    </p>
                    <Link
                      href="/animals/insects"
                      className="inline-flex items-center text-primary-600 hover:text-primary-800"
                    >
                      Tìm hiểu thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Côn trùng"
                      width={600}
                      height={400}
                      className="rounded-lg shadow object-cover h-full"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

