class Api::V1::AuctionsController < Api::ApplicationController
    
        before_action :find_auction, only: [:show, :update, :destroy]
        def index
            @auctions = Auction.all
            render json: @auctions, status: :ok
        end
        def show
            @auction = Auction.find(params[:id])
            render(json: @auction)
          end
        
          def create

            auction = Auction.new auction_params
            auction.user = current_user
            if auction.save
              render json: { id: auction.id }
            else
              render(
                json: { errors: auction.errors },
                status: 422 
              )
            end
            
          end
          def update
            if @auction.update auction_params
              render json: {id: @auction.id}
            else
              render(
              json:{ errors: @auction.errors},
              status: 422)
        
            end
          end
        
          def destroy
            @auction.destroy
            render(json: {errors: @auction.errors}, status:200)
          end



          private
          def find_auction
            @auction||=Auction.find params[:id]
          end
          def auction_params
            params.require(:auction).permit(:title, :body, :amount)
          end
    
    
end
