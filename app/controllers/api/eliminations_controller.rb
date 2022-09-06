class Api::EliminationsController < ApplicationController
    def index
        response = RestClient.get("http://interview.wptdev.com/api/killfeed")
        @eliminations = JSON.parse(response)
        render json: @eliminations
    end
end