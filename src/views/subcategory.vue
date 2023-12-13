<template>
  <TheHeader />
  <TheAction />
  <div class="content">
    <div class="content__wrap wrap">
      <h1 class="subcategory-title">{{ subcategoryName }}</h1>
      <div class="subcategory">
        <template v-if="window.innerWidth > 720">
          <div class="subcategory__sort text-right">
            <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.00705 0.0914726C2.90524 0.139921 2.77129 0.263735 2.69628 0.371399L2.56768 0.565195V8.2901V16.015L1.96758 15.4121C1.33533 14.7823 1.20137 14.6961 0.842383 14.6961C0.258353 14.6961 -0.0952806 15.1752 0.0225971 15.8104C0.0547456 15.9881 0.242278 16.2034 1.45856 17.4308C2.23013 18.2114 2.92668 18.8843 3.00705 18.9273C3.19458 19.0242 3.65537 19.0242 3.84291 18.9273C4.01437 18.8304 6.70948 16.1173 6.79521 15.9504C6.88094 15.7781 6.86486 15.3583 6.76842 15.1483C6.60232 14.7984 6.20582 14.6369 5.74503 14.723C5.57892 14.7553 5.42354 14.8738 4.91452 15.3852L4.28227 16.0096V8.28472V0.565195L4.15368 0.371399C3.91792 0.0214901 3.39819 -0.102324 3.00705 0.0914726Z"
                fill="#292929" />
              <path
                d="M9.81156 1.02249C9.55438 1.18398 9.42578 1.42623 9.42578 1.77614C9.42578 2.12605 9.55438 2.36829 9.81156 2.52979C9.98302 2.63207 10.0902 2.63745 12.4263 2.63745C14.7624 2.63745 14.8696 2.63207 15.041 2.52979C15.2982 2.36829 15.4268 2.12605 15.4268 1.77614C15.4268 1.42623 15.2982 1.18398 15.041 1.02249C14.8696 0.920207 14.7624 0.914824 12.4263 0.914824C10.0902 0.914824 9.98302 0.920207 9.81156 1.02249Z"
                fill="#292929" />
              <path
                d="M9.81156 6.1907C9.55438 6.3522 9.42578 6.59444 9.42578 6.94435C9.42578 7.29426 9.55438 7.5365 9.81156 7.698C9.98302 7.80028 10.0902 7.80566 14.1409 7.80566C18.1916 7.80566 18.2988 7.80028 18.4702 7.698C18.7274 7.5365 18.856 7.29426 18.856 6.94435C18.856 6.59444 18.7274 6.3522 18.4702 6.1907C18.2988 6.08842 18.1916 6.08304 14.1409 6.08304C10.0902 6.08304 9.98302 6.08842 9.81156 6.1907Z"
                fill="#292929" />
              <path
                d="M9.81156 11.3584C9.55438 11.5199 9.42578 11.7621 9.42578 12.112C9.42578 12.4619 9.55438 12.7042 9.81156 12.8657C9.98302 12.9733 10.0955 12.9733 15.4268 12.9733C20.7581 12.9733 20.8706 12.9733 21.0421 12.8657C21.2993 12.7042 21.4279 12.4619 21.4279 12.112C21.4279 11.7621 21.2993 11.5199 21.0421 11.3584C20.8706 11.2507 20.7581 11.2507 15.4268 11.2507C10.0955 11.2507 9.98302 11.2507 9.81156 11.3584Z"
                fill="#292929" />
              <path
                d="M9.81156 16.5265C9.55438 16.688 9.42578 16.9303 9.42578 17.2802C9.42578 17.6301 9.55438 17.8723 9.81156 18.0338C9.98302 18.1415 10.0955 18.1415 16.7128 18.1415C23.33 18.1415 23.4425 18.1415 23.614 18.0338C23.8712 17.8723 23.9998 17.6301 23.9998 17.2802C23.9998 16.9303 23.8712 16.688 23.614 16.5265C23.4425 16.4189 23.33 16.4189 16.7128 16.4189C10.0955 16.4189 9.98302 16.4189 9.81156 16.5265Z"
                fill="#292929" />
            </svg>
            Сортування:
            <a-select ref="select" style="width: 200px" value="Новинки">
              <a-select-option value="Новинки">Новинки</a-select-option>
              <a-select-option value="За популярністю">За популярністю</a-select-option>
              <a-select-option value="Від дешевих до дорогих">Від дешевих до дорогих</a-select-option>
              <a-select-option value="Від дорогих до дешевих">Від дорогих до дешевих</a-select-option>
            </a-select>
          </div>
        </template>
        <template v-else>
          <div class="subcategory__buttons">
            <button class="subcategory__buttons_filters" @click="showModalFilter">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.97371 0.135702C2.60521 0.381966 2.59979 0.419441 2.59979 2.51268V4.38643L2.318 4.47744C1.55933 4.71835 0.724798 5.44108 0.361722 6.16916C-0.120574 7.14351 -0.120574 8.28917 0.361722 9.26352C0.724798 9.9916 1.55933 10.7143 2.318 10.9552L2.59979 11.0463V17.2028C2.59979 24.0607 2.5727 23.595 2.97371 23.8627C3.12002 23.959 3.23924 23.9911 3.47226 23.9911C3.80824 23.9911 4.04126 23.8734 4.24718 23.6003C4.36098 23.4504 4.36098 23.4451 4.37724 17.2457L4.38808 11.0409L4.594 10.982C5.54776 10.6769 6.43648 9.82029 6.77246 8.88341C7.00006 8.24634 7.03258 7.53432 6.87 6.85977C6.84291 6.72593 6.71285 6.41542 6.59363 6.16916C6.2143 5.39825 5.4177 4.71299 4.594 4.45602L4.3935 4.39178L4.37724 2.46985C4.36098 0.617523 4.35556 0.542572 4.24718 0.398027C4.04126 0.124994 3.80824 0.00721741 3.47226 0.00721741C3.23924 0.00721741 3.12002 0.0393391 2.97371 0.135702Z"
                  fill="white" />
                <path
                  d="M10.5228 0.114349C10.4252 0.173239 10.3006 0.29637 10.241 0.392735C10.1326 0.564047 10.1326 0.676472 10.1326 7.18104V13.7927L9.78036 13.9158C8.83744 14.2531 8.09503 14.9972 7.70486 16.0037C7.5748 16.3303 7.56396 16.432 7.56396 17.1387C7.56396 17.8453 7.5748 17.947 7.70486 18.2736C8.09503 19.2801 8.83744 20.0242 9.78036 20.3615L10.1326 20.4846V21.9569C10.1326 23.3327 10.138 23.4398 10.241 23.6058C10.4035 23.8681 10.6474 23.9912 11.0051 23.9912C11.3627 23.9912 11.6066 23.8574 11.78 23.5629C11.8884 23.3863 11.8938 23.2738 11.91 21.9247L11.9263 20.4739L12.3436 20.308C13.1131 19.9921 13.7525 19.4032 14.1319 18.6591C14.3757 18.188 14.4733 17.7383 14.4733 17.1387C14.4733 16.5391 14.3757 16.0894 14.1319 15.6182C13.72 14.8045 12.9505 14.1407 12.1268 13.8783L11.9209 13.8141L11.91 7.21852C11.8938 0.676472 11.8938 0.622936 11.78 0.435562C11.6066 0.141117 11.3627 0.00727844 11.0051 0.00727844C10.7991 0.00727844 10.6474 0.0394001 10.5228 0.114349Z"
                  fill="white" />
                <path
                  d="M18.0439 0.125206C17.9464 0.194803 17.8109 0.317934 17.7513 0.398237C17.6375 0.548138 17.6375 0.590967 17.6212 4.1832L17.605 7.81827L17.4045 7.88251C16.5808 8.13948 15.7842 8.82474 15.4048 9.5903C15.1122 10.1899 15.0364 10.5218 15.0418 11.1964C15.0472 11.6461 15.0743 11.8441 15.1935 12.1921C15.5295 13.22 16.3965 14.0873 17.4045 14.4031L17.6104 14.4674L17.6212 18.959C17.6375 23.4185 17.6375 23.4507 17.7513 23.6006C18.1686 24.1573 19.0302 24.1252 19.312 23.547C19.3879 23.3757 19.3987 22.926 19.3987 18.9162V14.4727L19.6859 14.3817C20.1628 14.2318 20.5421 13.9802 20.9973 13.5305C21.6801 12.8506 21.9998 12.0958 21.9998 11.1428C21.9998 10.1899 21.6801 9.43504 20.9973 8.75514C20.5421 8.30544 20.1628 8.05383 19.6859 7.90392L19.3987 7.81292V4.22603C19.3987 0.226925 19.4149 0.398237 19.0248 0.135914C18.7592 -0.0407543 18.2986 -0.0461082 18.0439 0.125206Z"
                  fill="white" />
              </svg>
              <span>Фільтр</span>
            </button>
            <a-modal v-model:open="openFilter" @ok="handleOkFilter" class="subcategory__buttons_modal_filter_mobile">
              <div class="subcategory__filter_inner">
                <p class="subcategory__filter_inner_title">
                  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.97371 0.135763C2.60521 0.382027 2.59979 0.419502 2.59979 2.51274V4.38649L2.318 4.4775C1.55933 4.71841 0.724798 5.44114 0.361722 6.16922C-0.120574 7.14357 -0.120574 8.28923 0.361722 9.26358C0.724798 9.99166 1.55933 10.7144 2.318 10.9553L2.59979 11.0463V17.2029C2.59979 24.0608 2.5727 23.595 2.97371 23.8627C3.12002 23.9591 3.23924 23.9912 3.47226 23.9912C3.80824 23.9912 4.04126 23.8734 4.24718 23.6004C4.36098 23.4505 4.36098 23.4451 4.37724 17.2457L4.38808 11.041L4.594 10.9821C5.54776 10.6769 6.43648 9.82035 6.77246 8.88347C7.00006 8.2464 7.03258 7.53438 6.87 6.85983C6.84291 6.72599 6.71285 6.41549 6.59363 6.16922C6.2143 5.39831 5.4177 4.71305 4.594 4.45608L4.3935 4.39184L4.37724 2.46991C4.36098 0.617584 4.35556 0.542633 4.24718 0.398088C4.04126 0.125055 3.80824 0.00727844 3.47226 0.00727844C3.23924 0.00727844 3.12002 0.0394001 2.97371 0.135763Z"
                      fill="#292929" />
                    <path
                      d="M10.5228 0.114349C10.4252 0.173239 10.3006 0.29637 10.241 0.392735C10.1326 0.564047 10.1326 0.676472 10.1326 7.18104V13.7927L9.78036 13.9158C8.83744 14.2531 8.09503 14.9972 7.70486 16.0037C7.5748 16.3303 7.56396 16.432 7.56396 17.1387C7.56396 17.8453 7.5748 17.947 7.70486 18.2736C8.09503 19.2801 8.83744 20.0242 9.78036 20.3615L10.1326 20.4846V21.9569C10.1326 23.3327 10.138 23.4398 10.241 23.6058C10.4035 23.8681 10.6474 23.9912 11.0051 23.9912C11.3627 23.9912 11.6066 23.8574 11.78 23.5629C11.8884 23.3863 11.8938 23.2738 11.91 21.9247L11.9263 20.4739L12.3436 20.308C13.1131 19.9921 13.7525 19.4032 14.1319 18.6591C14.3757 18.188 14.4733 17.7383 14.4733 17.1387C14.4733 16.5391 14.3757 16.0894 14.1319 15.6182C13.72 14.8045 12.9505 14.1407 12.1268 13.8783L11.9209 13.8141L11.91 7.21852C11.8938 0.676472 11.8938 0.622936 11.78 0.435562C11.6066 0.141117 11.3627 0.00727844 11.0051 0.00727844C10.7991 0.00727844 10.6474 0.0394001 10.5228 0.114349Z"
                      fill="#292929" />
                    <path
                      d="M18.0439 0.125206C17.9464 0.194803 17.8109 0.317934 17.7513 0.398237C17.6375 0.548138 17.6375 0.590967 17.6212 4.1832L17.605 7.81827L17.4045 7.88251C16.5808 8.13948 15.7842 8.82474 15.4048 9.5903C15.1122 10.1899 15.0364 10.5218 15.0418 11.1964C15.0472 11.6461 15.0743 11.8441 15.1935 12.1921C15.5295 13.22 16.3965 14.0873 17.4045 14.4031L17.6104 14.4674L17.6212 18.959C17.6375 23.4185 17.6375 23.4507 17.7513 23.6006C18.1686 24.1573 19.0302 24.1252 19.312 23.547C19.3879 23.3757 19.3987 22.926 19.3987 18.9162V14.4727L19.6859 14.3817C20.1628 14.2318 20.5421 13.9802 20.9973 13.5305C21.6801 12.8506 21.9998 12.0958 21.9998 11.1428C21.9998 10.1899 21.6801 9.43504 20.9973 8.75514C20.5421 8.30544 20.1628 8.05383 19.6859 7.90392L19.3987 7.81292V4.22603C19.3987 0.226925 19.4149 0.398237 19.0248 0.135914C18.7592 -0.0407543 18.2986 -0.0461082 18.0439 0.125206Z"
                      fill="#292929" />
                  </svg>
                  <span>Фільтр</span>
                </p>
                <p class="text-center subcategory__filter_inner_name">Ціна</p>
                <div class="subcategory__filter_inner_cost">
                  <span>Від</span>
                  <input type="number" v-model="minPrice" @input="updateProducts">
                  <span>До</span>
                  <input type="number" v-model="maxPrice" @input="updateProducts">
                </div>
                <a-slider v-model:value="value2" range class="subcategory__filter_inner_cost_slider" />
                <hr />
                <p class="text-center subcategory__filter_inner_name">Бренд</p>
                <a-checkbox>Apple (123)</a-checkbox><br>
                <a-checkbox>Apple (123)</a-checkbox><br>
                <a-checkbox>Apple (123)</a-checkbox><br>
                <a-checkbox>Apple (123)</a-checkbox><br>
                <a-checkbox>Apple (123)</a-checkbox>
                <hr />
                <p class="text-center subcategory__filter_inner_name">Внутрішня пам'ять</p>
                <a-checkbox>Apple (123)</a-checkbox><br>
                <a-checkbox>Apple (123)</a-checkbox><br>
                <a-checkbox>Apple (123)</a-checkbox><br>
                <a-checkbox>Apple (123)</a-checkbox><br>
                <a-checkbox>Apple (123)</a-checkbox>
                <hr />
                <p class="text-center subcategory__filter_inner_name">Колір</p>
                <a-checkbox>Apple (123)</a-checkbox><br>
                <a-checkbox>Apple (123)</a-checkbox><br>
                <a-checkbox>Apple (123)</a-checkbox><br>
                <a-checkbox>Apple (123)</a-checkbox><br>
                <a-checkbox>Apple (123)</a-checkbox>
              </div>
              <template #footer>
              </template>
            </a-modal>
            <button class="subcategory__buttons_sort" @click="showModalSort">
              <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.00705 0.0914726C2.90524 0.139921 2.77129 0.263735 2.69628 0.371399L2.56768 0.565195V8.2901V16.015L1.96758 15.4121C1.33533 14.7823 1.20137 14.6961 0.842383 14.6961C0.258353 14.6961 -0.0952806 15.1752 0.0225971 15.8104C0.0547456 15.9881 0.242278 16.2034 1.45856 17.4308C2.23013 18.2114 2.92668 18.8843 3.00705 18.9273C3.19458 19.0242 3.65537 19.0242 3.84291 18.9273C4.01437 18.8304 6.70948 16.1173 6.79521 15.9504C6.88094 15.7781 6.86486 15.3583 6.76842 15.1483C6.60232 14.7984 6.20582 14.6369 5.74503 14.723C5.57892 14.7553 5.42354 14.8738 4.91452 15.3852L4.28227 16.0096V8.28472V0.565195L4.15368 0.371399C3.91792 0.0214901 3.39819 -0.102324 3.00705 0.0914726Z"
                  fill="#292929" />
                <path
                  d="M9.81156 1.02249C9.55438 1.18398 9.42578 1.42623 9.42578 1.77614C9.42578 2.12605 9.55438 2.36829 9.81156 2.52979C9.98302 2.63207 10.0902 2.63745 12.4263 2.63745C14.7624 2.63745 14.8696 2.63207 15.041 2.52979C15.2982 2.36829 15.4268 2.12605 15.4268 1.77614C15.4268 1.42623 15.2982 1.18398 15.041 1.02249C14.8696 0.920207 14.7624 0.914824 12.4263 0.914824C10.0902 0.914824 9.98302 0.920207 9.81156 1.02249Z"
                  fill="#292929" />
                <path
                  d="M9.81156 6.1907C9.55438 6.3522 9.42578 6.59444 9.42578 6.94435C9.42578 7.29426 9.55438 7.5365 9.81156 7.698C9.98302 7.80028 10.0902 7.80566 14.1409 7.80566C18.1916 7.80566 18.2988 7.80028 18.4702 7.698C18.7274 7.5365 18.856 7.29426 18.856 6.94435C18.856 6.59444 18.7274 6.3522 18.4702 6.1907C18.2988 6.08842 18.1916 6.08304 14.1409 6.08304C10.0902 6.08304 9.98302 6.08842 9.81156 6.1907Z"
                  fill="#292929" />
                <path
                  d="M9.81156 11.3584C9.55438 11.5199 9.42578 11.7621 9.42578 12.112C9.42578 12.4619 9.55438 12.7042 9.81156 12.8657C9.98302 12.9733 10.0955 12.9733 15.4268 12.9733C20.7581 12.9733 20.8706 12.9733 21.0421 12.8657C21.2993 12.7042 21.4279 12.4619 21.4279 12.112C21.4279 11.7621 21.2993 11.5199 21.0421 11.3584C20.8706 11.2507 20.7581 11.2507 15.4268 11.2507C10.0955 11.2507 9.98302 11.2507 9.81156 11.3584Z"
                  fill="#292929" />
                <path
                  d="M9.81156 16.5265C9.55438 16.688 9.42578 16.9303 9.42578 17.2802C9.42578 17.6301 9.55438 17.8723 9.81156 18.0338C9.98302 18.1415 10.0955 18.1415 16.7128 18.1415C23.33 18.1415 23.4425 18.1415 23.614 18.0338C23.8712 17.8723 23.9998 17.6301 23.9998 17.2802C23.9998 16.9303 23.8712 16.688 23.614 16.5265C23.4425 16.4189 23.33 16.4189 16.7128 16.4189C10.0955 16.4189 9.98302 16.4189 9.81156 16.5265Z"
                  fill="#292929" />
              </svg>
            </button>
            <a-modal v-model:open="openSort" title="Сортування за" @ok="handleOkSort">
              <a-radio-group>
                <a-radio :value="1">Новинки</a-radio><br>
                <a-radio :value="2">За популярністю</a-radio><br>
                <a-radio :value="3">Від дешевих до дорогих</a-radio><br>
                <a-radio :value="4">Від дорогих до дешевих</a-radio>
              </a-radio-group>
              <template #footer>
                <a-button key="back" class="sort-cancel-button" @click="handleOkSort">Скасувати</a-button>
                <a-button key="submit" class="sort-button" @click="handleOkSort">Сортувати</a-button>
              </template>
            </a-modal>
          </div>
        </template>
        <div class="subcategory__filter">
          <div class="subcategory__filter_inner">
            <p class="subcategory__filter_inner_title">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.97371 0.135763C2.60521 0.382027 2.59979 0.419502 2.59979 2.51274V4.38649L2.318 4.4775C1.55933 4.71841 0.724798 5.44114 0.361722 6.16922C-0.120574 7.14357 -0.120574 8.28923 0.361722 9.26358C0.724798 9.99166 1.55933 10.7144 2.318 10.9553L2.59979 11.0463V17.2029C2.59979 24.0608 2.5727 23.595 2.97371 23.8627C3.12002 23.9591 3.23924 23.9912 3.47226 23.9912C3.80824 23.9912 4.04126 23.8734 4.24718 23.6004C4.36098 23.4505 4.36098 23.4451 4.37724 17.2457L4.38808 11.041L4.594 10.9821C5.54776 10.6769 6.43648 9.82035 6.77246 8.88347C7.00006 8.2464 7.03258 7.53438 6.87 6.85983C6.84291 6.72599 6.71285 6.41549 6.59363 6.16922C6.2143 5.39831 5.4177 4.71305 4.594 4.45608L4.3935 4.39184L4.37724 2.46991C4.36098 0.617584 4.35556 0.542633 4.24718 0.398088C4.04126 0.125055 3.80824 0.00727844 3.47226 0.00727844C3.23924 0.00727844 3.12002 0.0394001 2.97371 0.135763Z"
                  fill="#292929" />
                <path
                  d="M10.5228 0.114349C10.4252 0.173239 10.3006 0.29637 10.241 0.392735C10.1326 0.564047 10.1326 0.676472 10.1326 7.18104V13.7927L9.78036 13.9158C8.83744 14.2531 8.09503 14.9972 7.70486 16.0037C7.5748 16.3303 7.56396 16.432 7.56396 17.1387C7.56396 17.8453 7.5748 17.947 7.70486 18.2736C8.09503 19.2801 8.83744 20.0242 9.78036 20.3615L10.1326 20.4846V21.9569C10.1326 23.3327 10.138 23.4398 10.241 23.6058C10.4035 23.8681 10.6474 23.9912 11.0051 23.9912C11.3627 23.9912 11.6066 23.8574 11.78 23.5629C11.8884 23.3863 11.8938 23.2738 11.91 21.9247L11.9263 20.4739L12.3436 20.308C13.1131 19.9921 13.7525 19.4032 14.1319 18.6591C14.3757 18.188 14.4733 17.7383 14.4733 17.1387C14.4733 16.5391 14.3757 16.0894 14.1319 15.6182C13.72 14.8045 12.9505 14.1407 12.1268 13.8783L11.9209 13.8141L11.91 7.21852C11.8938 0.676472 11.8938 0.622936 11.78 0.435562C11.6066 0.141117 11.3627 0.00727844 11.0051 0.00727844C10.7991 0.00727844 10.6474 0.0394001 10.5228 0.114349Z"
                  fill="#292929" />
                <path
                  d="M18.0439 0.125206C17.9464 0.194803 17.8109 0.317934 17.7513 0.398237C17.6375 0.548138 17.6375 0.590967 17.6212 4.1832L17.605 7.81827L17.4045 7.88251C16.5808 8.13948 15.7842 8.82474 15.4048 9.5903C15.1122 10.1899 15.0364 10.5218 15.0418 11.1964C15.0472 11.6461 15.0743 11.8441 15.1935 12.1921C15.5295 13.22 16.3965 14.0873 17.4045 14.4031L17.6104 14.4674L17.6212 18.959C17.6375 23.4185 17.6375 23.4507 17.7513 23.6006C18.1686 24.1573 19.0302 24.1252 19.312 23.547C19.3879 23.3757 19.3987 22.926 19.3987 18.9162V14.4727L19.6859 14.3817C20.1628 14.2318 20.5421 13.9802 20.9973 13.5305C21.6801 12.8506 21.9998 12.0958 21.9998 11.1428C21.9998 10.1899 21.6801 9.43504 20.9973 8.75514C20.5421 8.30544 20.1628 8.05383 19.6859 7.90392L19.3987 7.81292V4.22603C19.3987 0.226925 19.4149 0.398237 19.0248 0.135914C18.7592 -0.0407543 18.2986 -0.0461082 18.0439 0.125206Z"
                  fill="#292929" />
              </svg>
              <span>Фільтр</span>
            </p>
            <p class="text-center subcategory__filter_inner_name">Ціна</p>
            <div class="subcategory__filter_inner_cost">
              <span>Від</span>
              <input type="number" v-model="minPrice" @keyup.enter="updateProducts">
              <span>До</span>
              <input type="number" v-model="maxPrice" @keyup.enter="updateProducts">
            </div>
            <a-slider range class="subcategory__filter_inner_cost_slider" :min="minPrice" :max="maxPrice" />
            <hr />
            <p class="text-center subcategory__filter_inner_name">Бренд</p>
            <a-checkbox>Apple (123)</a-checkbox><br>
            <a-checkbox>Apple (123)</a-checkbox><br>
            <a-checkbox>Apple (123)</a-checkbox><br>
            <a-checkbox>Apple (123)</a-checkbox><br>
            <a-checkbox>Apple (123)</a-checkbox>
            <hr />
            <p class="text-center subcategory__filter_inner_name">Внутрішня пам'ять</p>
            <a-checkbox>Apple (123)</a-checkbox><br>
            <a-checkbox>Apple (123)</a-checkbox><br>
            <a-checkbox>Apple (123)</a-checkbox><br>
            <a-checkbox>Apple (123)</a-checkbox><br>
            <a-checkbox>Apple (123)</a-checkbox>
            <hr />
            <p class="text-center subcategory__filter_inner_name">Колір</p>
            <a-checkbox>Apple (123)</a-checkbox><br>
            <a-checkbox>Apple (123)</a-checkbox><br>
            <a-checkbox>Apple (123)</a-checkbox><br>
            <a-checkbox>Apple (123)</a-checkbox><br>
            <a-checkbox>Apple (123)</a-checkbox>
          </div>
        </div>
        <div class="subcategory__items">
          <template v-for="(i, idx) in products" :key="idx">
            <pc :title="i.name" :id="i._id" :srcImage="i.images[0] ? i.images[0].url || 'Логотип 88' : 'Логотип 88'"
              :liked="i.liked" :discount="true" :oldprice="i.oldPrice" :price="i.price" :stock_quantity="i.stock_quantity"
              :ratingVoid="i.ratingVoid" :countRating="i.reviews.length" />
          </template>
        </div>
      </div>
    </div>
  </div>
  <TheFooter />
</template>
<script>
import { ref, watch } from 'vue';
import TheHeader from '../components/base/TheHeader.vue';
import TheAction from '../components/base/TheAction.vue';
import TheFooter from '../components/base/TheFooter.vue';
import pc from '../components/ui/product-card.vue';
import axios from 'axios'

export default {
  props: ['$route'],
  components: {
    TheHeader,
    TheAction,
    TheFooter,
    pc
  },
  data() {
    return {
      products: [],
      window: {
        innerWidth: window.innerWidth
      },
      openSort: false,
      openFilter: false,
      subcategoryName: '',
      minPrice: null,
      maxPrice: null,
    }
  },
  methods: {
    handleResize() {
      this.window.innerWidth = window.innerWidth
    },
    clickButtonFilter() {
      console.log('filter button');
    },
    clickButtonSort() {
      console.log('sort button');
    },
    closeModals() {
      console.log('close modals');
    },
    showModalSort() {
      this.openSort = true;
    },
    handleOkSort(e) {
      console.log(e);
      this.openSort = false;
    },
    showModalFilter() {
      this.openFilter = true;
    },
    handleOkFilter(e) {
      console.log(e);
      this.openFilter = false;
    },
    filterPrice() {
      return Math.min(...this.products.map((product) => product.price));
    },
    updateProducts() {
      const isMinPriceValid = this.minPrice !== "";
      const isMaxPriceValid = this.maxPrice !== "";

      if (!isMinPriceValid || !isMaxPriceValid) {
        console.error("Please enter valid prices");
        return;
      }

      const minPrice = parseFloat(this.minPrice) || 0;
      const maxPrice = parseFloat(this.maxPrice) || Number.POSITIVE_INFINITY;

      const filteredProducts = this.products.filter(product =>
        typeof product === 'object' &&
        'price' in product &&
        typeof product.price === 'number' &&
        !isNaN(product.price) &&
        product.price >= minPrice &&
        product.price <= maxPrice
      );

      if (filteredProducts.length > 0) {
        const prices = filteredProducts.map(product => product.price);
        this.minPrice = Math.min(...prices);
        this.maxPrice = Math.max(...prices);
        console.log("Filtered products:", filteredProducts);
      } else {
        console.error("No valid products in the specified price range");
      }
    }

  },
  watch: {
    minPrice: 'updateProducts',
    maxPrice: 'updateProducts'
  },
  created() {
    const id = this.$route.params.query;
    console.log(id)
    axios.get(`https://88.cx.ua/item/getSubcategory?id=${id}&page=1`)
      .then(
        (response) => {
          this.products = response.data.items
          this.subcategoryName = response.data.categoryName
          this.updateProducts();
        },
      );
  },

}

</script>

<style lang="scss">
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.ant-modal-wrap {
  z-index: 10001 !important;
}

.ant-slider-track {
  background-color: #EFCA00 !important;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.sort-button {
  background: #EFCA00;
  color: white;
}

.sort-cancel-button {
  border: solid 1px #EFCA00;
}

.subcategory {
  display: flex;
  flex-wrap: wrap;

  &-title {
    font-size: 48px;
    font-family: '88';
    text-align: center;
    margin-bottom: 45px;
  }

  &__sort {
    width: 100%;
    font-family: '88';

    .ant-select-selector,
    .ant-select-open,
    .ant-select-focused {
      background-color: transparent !important;
      border: none !important;
      color: #EFCA00;
    }

    .ant-select-focused {
      .ant-select-selector {
        box-shadow: none !important;
      }
    }

    .ant-select-open {
      .ant-select-selection-item {
        color: #EFCA00;
      }
    }

    .ant-select-arrow {
      color: #EFCA00 !important;
    }
  }

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &_modal_filter_mobile {
      top: 0;
      width: 100% !important;
      max-width: 100% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      padding-bottom: 0 !important;

      .ant-modal-content {
        border-radius: 0 !important;
        height: 100vh !important;
      }
    }

    &_filters {
      width: 146px;
      height: 40px;
      border-radius: 10px;
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0;
      text-align: left;
      background: #EFCA00;
      border: none;
      display: flex;
      align-content: center;
      flex-wrap: wrap;
      padding: 20px;

      span {
        margin-top: 3.5px;
        margin-left: 18px;
      }
    }

    &_sort {
      background-color: white;
      border: solid 2px black;
      border-radius: 50px;
      padding: 5px;
    }
  }

  &__filter {
    width: 25%;

    &_inner {
      border-radius: 10px;
      border: 1px solid #0000000D;
      background: white;
      margin: 40px 20px;
      padding: 10px;
      font-family: '88';
      position: relative;

      .ant-checkbox-checked {
        .ant-checkbox-inner {
          background-color: #EFCA00 !important;
          border-color: #EFCA00 !important;
        }
      }

      hr {
        margin: 20px 0;
      }

      &_title {
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        font-size: 20px;

        span {
          margin-left: 10px;
        }
      }

      &_name {
        margin-top: 15px;
        margin-bottom: 10px;
        font-weight: 600;
      }

      &_cost {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;

        >* {
          padding: 5px;
        }

        input {
          width: 30%;
          border: 0.2px solid #29292940;
          border-radius: 4px;
        }

        button {
          background: #EFCA00;
          color: #FFFFFF;
          border: none;
          border-radius: 5px;
          padding: 5px 8px;
        }

        &_slider {
          .ant-slider-track {
            background-color: #EFCA00 !important;
          }

          .ant-slider-handle {
            &::after {
              box-shadow: 0 0 0 4px #EFCA00 !important;
              background-color: #EFCA00 !important;
            }
          }

          .ant-tooltip-open::after {
            box-shadow: 0 0 0 4px #EFCA00;
          }
        }
      }
    }

    @media (max-width: 720px) {
      display: none;
      position: fixed;
      left: 0;
      top: 0;
    }
  }

  &__items {
    width: 75%;
    margin-bottom: 40px;
    padding-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;

    @media (max-width: 968px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 25px;
    }

    @media (max-width: 720px) {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }

    @media (max-width: 440px) {
      grid-gap: 10px;
    }
  }
}

@media (max-width: 720px) {}
</style>