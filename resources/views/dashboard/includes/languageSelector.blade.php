<!--Language selector-->
				<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
				<li v-if="showLanguageSelector" class="dropdown">
					<a id="demo-lang-switch" class="lang-selector dropdown-toggle" href="#" data-toggle="dropdown">
								<span class="lang-selected">
									<img class="lang-flag" src="{!! asset('img/flags/united-kingdom.png') !!}" alt="English">
									<span class="lang-id">EN</span>
									<span class="lang-name">English</span>
								</span>
					</a>

					<!--Language selector menu-->
					<ul class="head-list dropdown-menu with-arrow">
						<li>
							<!--English-->
							<a href="#" class="active">
								<img class="lang-flag" src="{!! asset('img/flags/united-kingdom.png') !!}" alt="English">
								<span class="lang-id">EN</span>
								<span class="lang-name">English</span>
							</a>
						</li>
						<li>
							<!--France-->
							<a href="#">
								<img class="lang-flag" src="{!! asset('img/flags/france.png') !!}" alt="France">
								<span class="lang-id">FR</span>
								<span class="lang-name">Fran&ccedil;ais</span>
							</a>
						</li>
						<li>
							<!--Germany-->
							<a href="#">
								<img class="lang-flag" src="{!! asset('img/flags/germany.png') !!}" alt="Germany">
								<span class="lang-id">DE</span>
								<span class="lang-name">Deutsch</span>
							</a>
						</li>
						<li>
							<!--Italy-->
							<a href="#">
								<img class="lang-flag" src="{!! asset('img/flags/italy.png') !!}" alt="Italy">
								<span class="lang-id">IT</span>
								<span class="lang-name">Italiano</span>
							</a>
						</li>
						<li>
							<!--Spain-->
							<a href="#">
								<img class="lang-flag" src="{!! asset('img/flags/spain.png') !!}" alt="Spain">
								<span class="lang-id">ES</span>
								<span class="lang-name">Espa&ntilde;ol</span>
							</a>
						</li>
					</ul>
				</li>
				<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
				<!--End language selector-->