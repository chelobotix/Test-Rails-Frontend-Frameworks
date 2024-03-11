Rails.application.routes.draw do
  root 'pages#index'

  get "page2", to: "pages#page2"

  devise_for :users

  concern :with_datatable do
    post 'datatable', on: :collection
  end

  get "index", to: 'music_albums#index'


  get 'basic_datatable', to: 'pages#basic_datatable'

  resources :posts
  resources :users, concerns: [:with_datatable]
  resources :movies, concerns: [:with_datatable]
  resources :music_albums, only: [:index], concerns: [:with_datatable]
  resources :messages, only: [:create]

  mount ActionCable.server, at: '/cable'

  notify_to :users, with_devise: :users

end
