class ReactAppController < ApplicationController
  layout 'react_app'

  def index
    @react_app_props = { name: 'Stranger' }
  end
end
