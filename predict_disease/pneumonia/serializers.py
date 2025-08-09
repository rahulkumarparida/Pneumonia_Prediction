from rest_framework import serializers
from .models import PneumoniaScan

class PneumoniaScanSerializers(serializers.ModelSerializer):
    Xray_url = serializers.SerializerMethodField()
    class Meta:
        model = PneumoniaScan
        fields = ['id', 'Name', 'Xray_url', 'created_at' ,'result','confidance' ]

    def get_Xray_url(self, obj):
        request = self.context.get('request')
        if obj.Xray and hasattr(obj.Xray, 'url'):
            return request.build_absolute_uri(obj.Xray.url)
        return None
    
class PneumoniaScanPostSerializers(serializers.ModelSerializer):
    class Meta:
        model = PneumoniaScan
        fields = ['id', 'Name', 'Xray']