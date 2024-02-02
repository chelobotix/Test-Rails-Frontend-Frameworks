Rails.application.routes.draw do
  devise_for :users
  get 'music_albums/index'
  concern :with_datatable do
    post 'datatable', on: :collection
  end

  root 'pages#index'
  get 'basic_datatable', to: 'pages#basic_datatable'

  resources :posts
  resources :users, concerns: [:with_datatable]
  resources :movies, concerns: [:with_datatable]
  resources :music_albums, only: [:index], concerns: [:with_datatable]
end
