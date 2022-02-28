window.onload = function () {

    let html = `

        <div id="content_container">

        <div id="header_container">

            <p id="header">PyTorch installation</p>

        </div>

        <div id="detail_container">

            <div class="detail">Stable (1.10.2)</div>
            <div class="detail">Windows</div>
            <div class="detail">Pip</div>
            <div class="detail">C++ / Java</div>
            <div class="detail dull">CUDA 10.2</div>

        </div>

        <div id="query_container">

            <div id="query_header_container">

                <p id="query_header">Compute Platform</p>

            </div>

            <div id="query_option_container">

                <div style="background-color: #FFE747;" class="option">

                    <div class="l_container">
                        <p>😁</p>
                    </div>

                    <div class="r_container">
                        <p>CUDA 10.2</p>
                    </div>

                </div>
                <div style="background-color: #CBFF5C;" class="option">

                    <div class="l_container">
                        <p>😱</p>
                    </div>

                    <div class="r_container">
                        <p>CUDA 11.1</p>
                    </div>

                </div>
                <div style="background-color: #f5f5f5; color: #ccc" class="option dull">

                    <div class="l_container">
                        <p>⁉️</p>
                    </div>

                    <div class="r_container">
                        <p>ROCM 4.2 (beta)</p>
                    </div>

                </div>
                <div style="background-color: #48D1FE;" class="option">

                    <div class="l_container">
                        <p>☺️</p>
                    </div>

                    <div class="r_container">
                        <p>CPU</p>
                    </div>

                </div>
            </div>

        </div>

        <div id="navigation_container">

            <div id="l_navigation_container">

                <div class="navigation_tab_container">

                    <div class="navigation_tab_title_container">

                        <p class="navigation_tab_title">
                            Language
                        </p>

                    </div>

                    <div class="navigation_tab_button_container">

                        <button class="navigation_tab_button">
                            <- Back</button>

                    </div>

                </div>


            </div>

            <div id="m_navigation_container">

                <p id="m_navigation_header">️💠-️💠-️💠-️💠</p>

            </div>

            <div id="r_navigation_container">


                <div class="navigation_tab_container r">

                    <div class="navigation_tab_title_container r">

                        <p class="navigation_tab_title">
                            Finish 🏁
                        </p>

                    </div>

                    <div class="navigation_tab_button_container">

                        <button class="navigation_tab_button r">
                            Back -></button>

                    </div>

                </div>

            </div>

        </div>


    </div>

    <div id="code_container">

        <div id="header_container">

            <p id="header" class="code">Run this Command:</p>

        </div>

        <div id="code_content_container">

            <span id="cursor">
                >
            </span>

            <p id="code_content">

                Download here (Release version):
                <br>
                <a>
                    https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-win-shared-with-deps-1.8.2%2Bcu102.zip</a>
                <br>
                <br>
                Download here (Debug version):
                <br>
                <a> https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-win-shared-with-deps-debug-1.8.2%2Bcu102.zip
                </a>

                <br>
                <br>

                Note: Additional support for these binaries may be provided <a>by PyTorch Enterprise Support Program
                    Participants.</a>
            </p>



        </div>


    </div>


    `

    // Append the html string to the element (container)
    document.getElementById('container').innerHTML = html

}